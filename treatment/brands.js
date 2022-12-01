// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// function get id for categoryes
const get_brands_data = async () => {
	// load file
	let data_products = JSON.parse(fs.readFileSync('./data/products.json')).data

	//
	// treatment
	//
	let brands = {}
	for (let i = 0; i < data_products.length; i++) {
		brands = Object.assign({}, { [`${data_products[i].brand}`]: '' }, brands)
	}
	let i = 1
	for (const iterator in brands) {
		brands[`${iterator}`] = i
		i++
	}

	// write file
	await write_file(brands, 'brands')
}

// launch treatment
get_brands_data()
