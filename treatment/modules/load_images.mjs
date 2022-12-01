// import modules
import request from 'request'
import fs from 'fs'

// functions
const get_file_name = (url) => {
	return url.replace(/.*\//, '')
}

const load_image = async (url, directory, file_name) => {
	return new Promise((resolve, reject) => {
		request.head(url, function (err, res, body) {
			request(url)
				.pipe(fs.createWriteStream(`${directory}/${file_name}`))
				.on('close', resolve)
		})
	})
}

export default async (data, directory) => {
	for (let i = 0; i < data[`${directory}`].length; i++) {
		const links = data[`${directory}`][i].images
		for (let e = 0; e < links.length; e++) {
			const file_name = get_file_name(links[e])
			try {
				await load_image(links[e], directory, file_name)
			} catch (e) {
				console.log(e)
			}
			console.log(`saved ${links} images`)
		}
	}
	console.log(`download ${directory} images`)
}
