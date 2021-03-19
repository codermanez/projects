import requests
import urllib.request as urllib
import json
import ffmpeg
import string
import random
import os
from pygifsicle import optimize
from pytube import YouTube
from moviepy.editor import *
jsonSuffix = '.json'
vid240 = 'DASH_240.mp4'
vid360 = 'DASH_360.mp4'
vid480 = 'DASH_480.mp4'
def generate_name():
    randomNameGenerator = string.ascii_uppercase + string.ascii_lowercase + string.digits
    randomName = ''.join(random.choice(randomNameGenerator) for i in range(16)) + '.mp4'
    return randomName
def download_file(url):
    local_filename = url.split('/')[-1]
    r = requests.get(url, stream=True)
    with open(local_filename, 'wb') as f:
        for chunk in r.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)
    return local_filename
downloadOptions = input("Reddit: 1\nYoutube: 2\n")
if downloadOptions == '1':
    postURL = input("Input the post thread URL (cannot be a crosspost, go to the direct post itself): ")
    videoQuality = input("Input the wanted quality (1: 240p, 2: 360p, 3: 480p): ")
    if postURL.endswith('/'):
        postURL = postURL[:-1]
    postURLjsonified = postURL + jsonSuffix
    response = urllib.urlopen(postURLjsonified)
    URLresponse = json.loads(response.read())
    internalPostURL = URLresponse[0]['data']['children'][0]['data']['url']
    print(internalPostURL)
    video480URL = internalPostURL + '/DASH_480.mp4'
    video360URL = internalPostURL + '/DASH_360.mp4'
    video240URL = internalPostURL + '/DASH_240.mp4'
    audioURL = internalPostURL + '/DASH_audio.mp4'
    print('No Audio: '+video480URL)
    print('No Audio: '+video360URL)
    print('No Audio: '+video240URL)
    print('Just Audio: '+audioURL)
    if videoQuality == '1':
        videoURL = video240URL
        vid = vid240
    elif videoQuality == '2':
        videoURL = video360URL
        vid = vid360
    elif videoQuality == '3':
        videoURL = video480URL
        vid = vid480
    else:
        print('Sorry, the video quality you entered does not exist, switching to 480p')
        videoURL = video480URL
        vid = vid480
    download_file(videoURL)
    download_file(audioURL)
    video = ffmpeg.input(vid)
    audio = ffmpeg.input('DASH_audio.mp4')
    turntogif = input('Do you want to turn it into a gif? !!!WARNING, GIFS ARE BAD AT FILE COMPRESSION, BE CAREFUL!!! (0: no, 1: yes): ')
    if turntogif == '1':
        clip = (VideoFileClip(randomname))
        clip.write_gif(randomname[:16]+".gif")
        optimize(randomname[:16] + ".gif")
    elif turntogif == '0':
        h = 1
    else:
        print('Invalid response given, not creating a gif')
    randomname = generate_name()
    out = ffmpeg.output(video, audio, randomname, vcodec='h264', acodec='aac', strict='experimental')
    out.run()
    os.remove(vid)
    os.remove('DASH_audio.mp4')
elif downloadOptions == '2':
    youtubeURL = input("Input the video URL: ")
    yt = YouTube(youtubeURL)
    streamlist = yt.streams
    for x in streamlist:
        stream = str(x)
        indx = streamlist.index(x) + 1
        vidresloc = stream.find('res')
        vidfpsloc = stream.find('fps')
        vidres = stream[vidresloc:vidfpsloc]
        vidfps = stream[vidfpsloc:stream.find('vcodec')]
        if vidres == 'ressive="False" type="audio"':
            h = 1
        else:
            vidres = vidres[vidres.find('"')+1:vidres.rfind('"')]
            vidfps = vidfps[vidfps.find('"')+1:vidfps.rfind('"')]
            print('Download Option ' + str(indx)+ ':\n' + vidres + ' @ ' + vidfps + '\n')
    DLoption = input('Select wanted download option number: ')
    try:
        DLoption = int(DLoption) - 1
    except ValueError:
        print("The answer was not an integer, reverting to first option")
        DLoption = 0
    except:
        print("Something else went wrong, reverting to first option")
        DLoption = 0
    vidtyp = str(yt.streams[DLoption])
    vidtyploc = stream.find('mime_type')
    vidtyp = vidtyp[vidtyploc:stream.find('abr')]
    vidtyp = vidtyp[vidtyp.find('"') + 1:vidtyp.rfind('"')]
    vidtyp = vidtyp[vidtyp.find('/')+1:]
    audtyp = str(yt.streams[len(streamlist)-1])
    audtyploc = stream.find('mime_type')
    audtyp = audtyp[audtyploc:stream.find('abr')]
    audtyp = audtyp[audtyp.find('"') + 1:audtyp.rfind('"')]
    audtyp = audtyp[audtyp.find('/') + 1:]
    tvf = ffmpeg.input('temporaryvideofile.' + vidtyp)
    taf = ffmpeg.input('temporaryaudiofile.' + audtyp)
    yt.streams[DLoption].download(filename='temporaryvideofile')
    yt.streams[len(streamlist)-1].download(filename='temporaryaudiofile')
    randomname = generate_name()
    out = ffmpeg.output(tvf, taf, randomname, vcodec='h264', acodec='aac', strict='experimental')
    out.run()
    os.remove('temporaryvideofile.' + vidtyp)
    os.remove('temporaryaudiofile.' + audtyp)
    turntogif = input('Do you want to turn it into a gif? !!!WARNING, GIFS ARE BAD AT FILE COMPRESSION, BE CAREFUL!!! (0: no, 1: yes): ')
    if turntogif == '1':
        clip = (VideoFileClip(randomname))
        clip.write_gif(randomname[:16] + ".gif")
        optimize(randomname[:16] + ".gif")
    elif turntogif == '0':
        h = 1
    else:
        print('Invalid response given, not creating a gif')
