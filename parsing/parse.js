// import functions
import load_images from './load_images.mjs'
import open_page from './open_page.mjs'
import write_file from './write_file.mjs'

// var-s
const base_link = 'https://goldholod.com'
const products_link = 'catalog'

// functions
const parse_sait = async () => {
	let data = {
		products: [],
		category_links: {},
		category: [],
	}

	//
	// parse products
	//
	// for (let i = 0; i < 179; i++) {
	for (let i = 0; i < 1; i++) {
		const current_link = `${base_link}/${products_link}/?page=${i + 1}`
		data.products = [
			...data.products,
			...(await open_page(current_link, 'catalog')),
		]
		console.log(`${products_link}?page=${i + 1}`)
	}

	//
	// parse products detail
	//
	// for (let i = 0; i < data.products.length; i++) {
	for (let i = 0; i < 2; i++) {
		const result = [...(await open_page(data.products[i].link, 'product'))]

		Object.assign(data.products[i], result[0])
		Object.assign(data.products[i], result[2])
		Object.assign(data.category_links, result[1])

		console.log(`product === ${i} === ${data.products[i].link} `)
	}

	//
	// parse detail category info
	//
	let i = 0
	for (const key in data.category_links) {
		const result = await open_page(data.category_links[key], 'category')
		result['name'] = key
		result['link'] = data.category_links[key]

		data.category.push(result)

		i++
		console.log(`category = ${i}`)
	}

	//
	// download images
	//
	load_images(data, 'products')
	load_images(data, 'category')

	//
	// write file
	//
	await write_file(data)
}
// launch parse
parse_sait()
