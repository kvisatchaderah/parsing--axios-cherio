export default async () => {
	try {
		const category = document.getElementsByClassName(
			'side-shop-catalog-categories__item-link'
		)
		const sub_category = document.getElementsByClassName(
			'side-shop-catalog-categories__subitem-link'
		)

		let result = {}

		// category
		for (let i = 0; i < category.length; i++) {
			result[`${category[i].textContent}`] = category[i].href
		}

		// sub_category
		for (let i = 0; i < sub_category.length; i++) {
			result[`${sub_category[i].textContent}`] = sub_category[i].href
		}

		return result
	} catch (e) {
		console.log(e)
	}
}
