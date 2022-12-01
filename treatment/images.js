// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// function get id for categoryes
const get_features_data = async () => {
	// load file
	let data_products = JSON.parse(fs.readFileSync('./data/products.json')).data

	//
	// treatment
	//
	let data_images = {}
	for (let i = 0; i < data_products.length; i++) {
		for (let e = 0; e < data_products[i].images_name.length; e++) {
			data_images = Object.assign(
				{},
				{[`${data_products[i].images_name[e]}`]: ''},
				data_images
			)
		}
	}

	// add id
	let i = 1
	for (const key in data_images) {
		data_images[`${key}`] = i++
	}

	// write file
	await write_file(data_images, 'images')
}

// launch treatment
get_features_data()
