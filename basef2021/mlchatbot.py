import discord # imports
import random
import numpy as np
import os
import requests
import time
import json
from textgenrnn import textgenrnn
from discord_webhook import DiscordWebhook, DiscordEmbed
doubleindexthing = [1, 2]
client = discord.Client()
textgen = textgenrnn('weight.hdf5') # loading the weights

@client.event
async def on_ready(): # small thing to tell when ready
    print('We have logged in as {0.user}'.format(client)) # print to tell when ready

@client.event
async def on_message(message): # when a message is sent
    if message.author == client.user: # if the author is the bot
        return # do nothing
    elif message.guild.id == {insert guild id}: # else but if the guild id matches the test server
        genmsg = textgen.generate(1, return_as_list=True, temperature=0.5) # generate a list with 1 item
        genmsg = genmsg[0] # turn the variable "genmsg" into the outputted item in the list
        for i in doubleindexthing: # for variable "i" in "double index thing"
            indx = genmsg.find(":") + i # find a colon and go 1 space forward
            genmsg = genmsg[indx:] # remove everything behind the current location
        await message.channel.send(genmsg) # send the generated and formatted string

client.run({insert bot token}) # BLURRED FOR PRIVACY REASONS
