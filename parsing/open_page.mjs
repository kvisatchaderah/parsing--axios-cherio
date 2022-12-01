// import modules
import axios from 'axios'
import cheerio from 'cheerio'

// import functions
import parse_catalog from './catalog.mjs'
import parse_product from './product.mjs'
import parse_category from './category.mjs'

// functions
export default async (link, type) => {
	try {
		const { data } = await axios.get(link)
		const dom = await cheerio.load(data)

		let result
		if (type == 'catalog') result = await parse_catalog(dom)
		if (type == 'product') result = await parse_product(dom)
		if (type == 'category') result = await parse_category(dom)

		return result
	} catch (e) {
		console.log(e)
	}
}
