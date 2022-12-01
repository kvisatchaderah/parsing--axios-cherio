// import modules
import puppeteer from 'puppeteer'

const check_location = () => {
	if (window.location.search == '') return false
	return true
}

// functions
export default async (link, i) => {
	try {
		const current_link = `${link}/?page=${i}`

		const browser = await puppeteer.launch({
			headless: true,
			slowMo: 50,
			devtools: true,
			ignoreHTTPSErrors: true,
		})
		const page = await browser.newPage()
		await page.setViewport({ width: 1920, height: 1080 })
		await page.goto(current_link, { waitUntil: 'domcontentloaded', timeout: 0 })

		const response = await page.evaluate(check_location)
		await browser.close()
		return response
	} catch (e) {
		console.log(e)
	}
}
