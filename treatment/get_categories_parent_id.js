// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'
import get_url from './modules/get_url.mjs'
import get_parent_id from './modules/get_parent_id.mjs'
import get_description from './modules/get_description.mjs'

// function get id for categoryes
const get_categories_parent_id = async () => {
	// load file
	let data = JSON.parse(fs.readFileSync('./data/categoryes.json')).data

	// get parent id
	for (let i = 0; i < data.length; i++) {
		if (data[i].parent_categorys.length > 0) {
			data[i][`parent_id`] = await get_parent_id(data, data[i].parent_categorys)
		} else {
			data[i][`parent_id`] = ''
		}
	}

	// write file
	await write_file(data, 'categoryes')
}

// launch treatment
get_categories_parent_id()
