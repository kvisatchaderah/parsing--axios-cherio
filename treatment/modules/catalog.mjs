export default async () => {
	try {
		//
		// DOM-s
		//
		const product_items = document.getElementsByClassName('shop-catalog__item')

		let result = []

		;[...product_items].forEach((item) => {
			// data
			const availability_dom = item.getElementsByClassName(
				'shop-catalog__item-availability-value'
			)[0]
			const link = item.getElementsByClassName(
				'shop-catalog__item-picture-link'
			)[0].href
			const name = item
				.getElementsByClassName('shop-catalog__item-title-link')[0]
				.textContent.trim()
			const price_val = item.getElementsByClassName(
				'shop-catalog__item-prices-current'
			)[0].textContent

			// data treatment
			const price = price_val.replace(/\D/g, '')

			let availability
			if (
				availability_dom &&
				availability_dom.classList.contains(
					'shop-catalog__item-availability-value_blue'
				)
			) {
				availability = false
			} else {
				availability = true
			}

			// push
			result.push({
				name,
				availability,
				link,
				price,
			})
		})

		// return
		return result
	} catch (e) {
		console.log(e)
	}
}
