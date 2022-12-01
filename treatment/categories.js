// import modules
import fs from 'fs'

// import functions
import write_file from './modules/write_file.mjs'
import get_description from './modules/get_description.mjs'
import get_url from './modules/get_url.mjs'

// function get id for categoryes
const get_categoryes_data = async () => {
	// load file
	let links = []
	let data_categoryes = await JSON.parse(
		fs.readFileSync('./data/categoryes.json')
	).data

	// delete not unique data
	for (let i = 0; i < data_categoryes.length; i++) {
		
		let unique = true
		for (let e = 0; e < links.length; e++) {
			if (links[e] == data_categoryes[i].link) {
				data_categoryes.splice(i, 1)
				unique = false
				i--
				break
			}
		}
		if (unique) {
			links.push(data_categoryes[i].link)
		}
	}

	// add id, url and treatment description
	for (let i = 0; i < data_categoryes.length; i++) {
		// add id
		data_categoryes[i].id = i + 1

		// add url
		data_categoryes[i].url = await get_url(data_categoryes[i].link)

		// treatment description
		data_categoryes[i].description = await get_description(
			data_categoryes[i].description
		)
	}

	// write file
	await write_file(data_categoryes, 'categoryes')
}

// launch treatment
get_categoryes_data()
