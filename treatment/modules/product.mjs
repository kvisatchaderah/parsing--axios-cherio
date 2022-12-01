export default async () => {
	try {
		//
		// functions
		//

		// null dom-s treatment
		const inner_html_or_null = (elem) => {
			elem ? (elem = elem.innerHTML.trim()) : (elem = '')

			return elem
		}

		// replace folder to null in image.src
		const replace_image_src = (src) => {
			return src.replace(/\/.*\//, '').replace(/https:/, '')
		}

		//
		// DOM-s
		//
		const main = document.getElementsByClassName('p-shop-product')[0]

		// parent category
		const parent_category_links_doms = document.getElementsByClassName(
			's-crumbs__item-link'
		)

		let category_data = {}
		let parent_categorys = []
		if (parent_category_links_doms) {
			;[...parent_category_links_doms].forEach((elem) => {
				const link = elem.href
				let name = elem.getElementsByClassName('s-crumbs__item-name')[0]
				name = inner_html_or_null(name)

				if (name != 'Главная') category_data[`${name}`] = link
				if (name != 'Главная') parent_categorys.push(name)
			})
		}

		// top info
		let article = ''
		let brand = ''
		let sizes = ''
		if (main) {
			article = main.querySelector(
				'.p-shop-product-main__info-item_article .p-shop-product-main__info-item-value'
			)
			brand = main.querySelector(
				'.p-shop-product-main__info-item_brand .p-shop-product-main__info-item-link'
			)
			sizes = main.querySelector(
				'.p-shop-product-main__info-item_sizes .p-shop-product-main__info-item-value'
			)
		}

		article = inner_html_or_null(article)
		brand = inner_html_or_null(brand)
		sizes = inner_html_or_null(sizes)

		// description
		let description

		if (main)
			description = main.getElementsByClassName(
				'p-shop-product-data__description'
			)[0]

		let description_table_elems = ''
		if (description) {
			description_table_elems = description.querySelectorAll('*')
			description_table_elems.forEach((elem) => {
				elem.removeAttribute('style')
			})
		}

		description = inner_html_or_null(description)

		// images
		let images_dom
		if (main)
			images_dom = main.getElementsByClassName('p-shop-product-gallery__item')

		let images = []
		if (images_dom) {
			;[...images_dom].forEach((img) => {
				images.push(img.href)
			})
		}

		let images_name = []
		images.forEach((elem) => {
			images_name.push(replace_image_src(elem))
		})

		// specifications
		let spec_name = ''
		let spec_val = ''
		if (main) {
			spec_name = main.getElementsByClassName(
				'p-shop-product-data__features-item-label'
			)
			spec_val = main.getElementsByClassName(
				'p-shop-product-data__features-item-value'
			)
		}

		let spec = {}
		for (let i = 0; i < spec_name.length; i++) {
			const current_name = inner_html_or_null(spec_name[i])
			const current_val = inner_html_or_null(spec_val[i])
			spec[`${current_name}`] = `${current_val}`
		}

		console.log('specifications')

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
