// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// function get id for categoryes
const get_products_id_json = async () => {
	// load file
	let data_products = JSON.parse(fs.readFileSync('./data/products.json')).data

	let products_id = {}

	for (let i = 0; i < data_products.length; i++) {
		products_id = Object.assign({}, {[`${data_products[i].link}`]: data_products[i].id} ,products_id)
	}

	// write file
	await write_file(products_id, 'products_id')
}

// launch treatment
get_products_id_json()
