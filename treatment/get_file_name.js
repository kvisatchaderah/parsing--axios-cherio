// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'
import get_file_name from './modules/get_file_name.mjs'

// function
const get_file_name = async () => {
	// load file
	let data = JSON.parse(fs.readFileSync('./products.json')).data

	// treatment
	for (let i = 0; i < data.products.length; i++) {
		const current = data.products[i]

		for (let e = 0; e < current.images.length; e++) {
			current.images_name[e] = get_file_name(current.images[e])
		}
	}

	// write file
	await write_file(data)
}

// launch treatment
get_file_name()
