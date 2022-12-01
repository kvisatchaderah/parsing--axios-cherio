// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'
import get_file_name from './modules/get_file_name.mjs'
import get_url from './modules/get_url.mjs'
import get_parent_id from './modules/get_parent_id.mjs'
import get_description from './modules/get_description.mjs'

// function get id for categoryes
const treatment_data = async () => {
	// load file
	let data_products = await JSON.parse(fs.readFileSync('./data/products.json'))
		.data

	//
	// treatment
	//
	for (let i = 0; i < data_products.length; i++) {
		// get id
		data_products[i].id = i + 1

		// get url
		data_products[i].url = await get_url(data_products[i].link)

		// get description
		data_products[i].description = await get_description(
			data_products[i].description
		)
	}

	// write file
	await write_file(data_products, 'products')
}

// launch treatment
treatment_data()
