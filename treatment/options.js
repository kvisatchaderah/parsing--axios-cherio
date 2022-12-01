// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// get_options_data
const get_options_data = async () => {
	// load file
	let data_products = JSON.parse(fs.readFileSync('./data/products.json')).data
	let data_features = JSON.parse(fs.readFileSync('./data/features.json')).data

	//
	// treatment
	//
	let options = []
	for (let i = 0; i < data_products.length; i++) {
		for (const key in data_products[i].spec) {
			options.push({
				product_id: data_products[i].id,
				feature_id: data_features[`${key}`],
				value: data_products[i].spec[`${key}`],
			})
		}
	}

	// write file
	await write_file(options, 'options')
}

// launch treatment
get_options_data()
