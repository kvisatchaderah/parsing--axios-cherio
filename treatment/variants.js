// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// get_variants_data
const get_variants_data = async () => {
	// load file
	let data_products = JSON.parse(fs.readFileSync('./data/products.json')).data

	//
	// treatment
	//
	let variants = []
	for (let i = 0; i < data_products.length; i++) {
		variants.push({ id: data_products[i].id, price: `${data_products[i].price}.00` })
	}

	// write file
	await write_file(variants, 'variants')
}

// launch treatment
get_variants_data()
