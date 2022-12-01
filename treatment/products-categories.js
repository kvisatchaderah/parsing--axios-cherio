// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// function get id for categoryes
const get_products_categories = async () => {
	// load file
	let data_products = JSON.parse(fs.readFileSync('./data/products.json')).data
	let data_categoryes_id = JSON.parse(
		fs.readFileSync('./data/categoryes_id.json')
	).data
	let data_products_id = JSON.parse(
		fs.readFileSync('./data/products_id.json')
	).data
	let data_products_parents = JSON.parse(
		fs.readFileSync('./data/products-parents.json')
	).data

	//
	// treatment
	//
	let number = 0
	let products_categories = []

	// set products_categories for data_products
	for (let i = 0; i < data_products.length; i++) {
		let parent_categorys_name
		const parent_categorys_length = data_products[i].parent_categorys.length
		if (parent_categorys_length > 0) {
			parent_categorys_name =
				data_products[i].parent_categorys[parent_categorys_length - 1]
				
			products_categories.push({
				product_id: data_products[i].id,
				category_id: data_categoryes_id[`${parent_categorys_name}`],
				position: number++,
			})
		}
	}

	// set products_categories for data_products_parents
	for (let i = 0; i < data_products_parents.length; i++) {
		for (const key in data_products_parents[i]) {
			const category_id = data_categoryes_id[`${key}`]
			console.log('key: ', key)
			console.log('category_id: ', category_id)

			for (let e = 0; e < data_products_parents[i][`${key}`].length; e++) {
				const product_id =
					data_products_id[`${data_products_parents[i][`${key}`][e]}`]

				products_categories.push({
					product_id: product_id,
					category_id: category_id,
					position: number++,
				})
			}
		}
	}

	// write file
	await write_file(products_categories, 'products_categories')
}

// launch treatment
get_products_categories()
