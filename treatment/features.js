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
	let features = {}
	for (let i = 0; i < data_products.length; i++) {
		const featur = data_products[i].spec
		for (const key in featur) {
			features[`${key}`] = ''
		}
	}
	let i = 1
	for (const key in features) {
		features[`${key}`] = i++
	}

	// write file
	await write_file(features, 'features')
}

// launch treatment
get_features_data()
