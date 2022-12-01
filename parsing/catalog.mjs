// import modules
import cheerio from 'cheerio'

// functions
export default async (dom) => {
	try {
		//
		// DOM-s
		//
		let result = []

		// each
		dom('.shop-catalog__item').each((i, elem) => {
			// availability
			const availability_dom = dom(elem).find(
				'.shop-catalog__item-availability-value'
			)

			let availability
			if (
				availability_dom &&
				availability_dom.hasClass('shop-catalog__item-availability-value_blue')
			) {
				availability = false
			} else {
				availability = true
			}

			// link
			const link = `https://goldholod.com/${dom(elem)
				.find('.shop-catalog__item-picture-link')
				.attr('href')}`

			// name
			const name = dom(elem)
				.find('.shop-catalog__item-title-link')
				.text()
				.trim()

			// price
			const price = dom(elem)
				.find('.shop-catalog__item-prices-current')
				.text()
				.replace(/\D/g, '')

			// push
			result.push({
				availability,
				link,
				name,
				price,
			})
		})
		// return
		return result
		// catch
	} catch (e) {
		console.log(e)
	}
}
