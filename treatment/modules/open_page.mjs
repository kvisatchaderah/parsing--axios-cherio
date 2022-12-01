// import modules
import puppeteer from 'puppeteer'

// import functions
import parse_catalog from './catalog.mjs'
import parse_product from './product.mjs'
import parse_category_info from './category_info.mjs'
import parse_category_details from './category_detail.mjs'
import parent_category from './parent_category.mjs'

// functions
export default async (link, type) => {
	try {
		const browser = await puppeteer.launch({
			headless: true,
			slowMo: 100,
			devtools: true,
			ignoreHTTPSErrors: true,
		})
		const page = await browser.newPage()
		await page.setViewport({ width: 1920, height: 1080 })
		await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 0 })

		let result
		if (type == 'catalog') result = await page.evaluate(parse_catalog)
		if (type == 'product') result = await page.evaluate(parse_product)
		if (type == 'category-info')
			result = await page.evaluate(parse_category_info)
		if (type == 'category-detail')
			result = await page.evaluate(parse_category_details)
		if (type == 'parent-category')
			result = await page.evaluate(parent_category)

		await browser.close()
		return result
	} catch (e) {
		console.log(e)
	}
}
