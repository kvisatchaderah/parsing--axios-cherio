// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// function get id for categoryes
const get_products_categories = async () => {
	// load file
	let data = JSON.parse(
		fs.readFileSync('./data/products_categories.json')
	).data

	let result_data = []
	let unique = {}

	for (let i = 0; i < data.length; i++) {
		const unique_id = `${data[i].product_id}${data[i].category_id}`

		if (unique[`${unique_id}`] !== true) {
			unique[`${unique_id}`] = true
			result_data.push(data[i])
		}
	}

	// write file
	await write_file(result_data, 'products_categories')
}

// launch treatment
get_products_categories()
