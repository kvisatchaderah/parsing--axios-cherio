// import functions
import replace_image_src from './replace_image_src.mjs'

// functions
export default async (dom) => {
	try {
		//
		// DOM-s
		//
		const main = dom('.p-shop-product')

		// parent category
		const parent_category_links_doms = dom('.s-crumbs__item-link')

		let category_data = {}
		let parent_categorys = []

		if (parent_category_links_doms) {
			for (let i = 0; i < parent_category_links_doms.length; i++) {
				const link = `https://goldholod.com/${dom('.s-crumbs__item-link')
					.eq(i)
					.attr('href')}`
				const name = dom('.s-crumbs__item-link').eq(i).text().trim()

				if (name != 'Главная') category_data[`${name}`] = link
				if (name != 'Главная') parent_categorys.push(name)
			}
		}

		// top info
		let article = ''
		let brand = ''
		let sizes = ''

		if (main) {
			article = dom('.p-shop-product')
				.find(
					'.p-shop-product-main__info-item_article .p-shop-product-main__info-item-value'
				)
				.text()
				.trim()
			brand = dom('.p-shop-product')
				.find(
					'.p-shop-product-main__info-item_brand .p-shop-product-main__info-item-link'
				)
				.text()
				.trim()
			sizes = dom('.p-shop-product')
				.find(
					'.p-shop-product-main__info-item_sizes .p-shop-product-main__info-item-value'
				)
				.text()
				.trim()
		}

		// description
		let description = ''

		if (main)
			description = dom('.p-shop-product')
				.find('.p-shop-product-data__description')
				.text()
				.trim()

		// images
		let images_dom
		if (main)
			images_dom = dom('.p-shop-product').find('.p-shop-product-gallery__item')

		let images = []
		if (images_dom) {
			for (let i = 0; i < images_dom.length; i++) {
				images.push(
					dom('.p-shop-product')
						.find('.p-shop-product-gallery__item')
						.eq(i)
						.attr('href')
				)
			}
		}

		let images_name = []
		images.forEach((elem) => {
			images_name.push(replace_image_src(elem))
		})

		// specifications
		let spec = {}
		if (main) {
			const spec_name = dom('.p-shop-product').find(
				'.p-shop-product-data__features-item-label'
			)

			for (let i = 0; i < spec_name.length; i++) {
				const name = dom('.p-shop-product')
					.find('.p-shop-product-data__features-item-label')
					.eq(i)
					.text()
					.trim()
				const val = dom('.p-shop-product')
					.find('.p-shop-product-data__features-item-value')
					.eq(i)
					.text()
					.trim()

				spec[`${name}`] = `${val}`
			}
		}

		// return
		return [
			{
				article,
				brand,
				sizes,
				description,
				images,
				images_name,
				parent_categorys,
				spec,
			},
			category_data,
		]
	} catch (e) {
		console.log(e)
	}
}
