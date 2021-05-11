const Uwuifier = require('uwuifier')
const fs = require('fs')
const fetch = require('node-fetch')
var uwuedtxt;
const uwuifier = new Uwuifier({
	spaces: {
        faces: 0.030,
        actions: 0.0150,
        stutters: 0.10
    },
    words: 1,
    exclamations: 1
});
var option = 'web';
if (option == 'web') {
	console.log('Getting file to UwU...')
	fetch('http://textfiles.com/science/coldfusn.txt')
		.then(res => res.text())
		.then(body => {
			console.log('Got File!, Attempting to UwU now...')
			uwuedtxt = uwuifier.uwuifySentence(body)
			fs.writeFile('uwuedfile.txt', uwuedtxt, err => {
				if (err) {
					console.error(err)
				}
			})
			console.log('File has been UwUed!')
		});
} else if (option == 'file') {
	fs.readFile('filetouwu.txt', 'utf8', (err, data) => {
		if (err) {
			console.error(err)
		}
		console.log('UwUing file...')
		var content = uwuifier.uwuifySentence(data);
		fs.writeFile('uwuedfile.txt', content, err => {
			if (err) {
				console.error(err)
			}
		});
		console.log('Finished UwUing file!')
	});
}
