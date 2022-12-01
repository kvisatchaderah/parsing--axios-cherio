// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'

// function get id for categoryes
const get_products_categories = async () => {
	// load file
	let data_categoryes = JSON.parse(
		fs.readFileSync('./data/categoryes.json')
	).data

	// build categoryes_id
	let categoryes_id = {}
	for (let i = 0; i < data_categoryes.length; i++) {
		categoryes_id = Object.assign(
			{},
			{
				[`${data_categoryes[i].category_name}`]:
					data_categoryes[i].id,
			},
			categoryes_id
		)
	}

	// write file
	await write_file(categoryes_id, 'categoryes_id')
}

// launch treatment
get_products_categories()
