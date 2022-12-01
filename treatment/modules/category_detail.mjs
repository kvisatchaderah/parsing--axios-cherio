export default async () => {
	try {
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
		const header = document.getElementsByClassName(
			'p-shop-catalog-header__title'
		)[0]
		console.log(header)

		// parent category
		const parent_category_links_doms = document.getElementsByClassName(
			's-crumbs__item-link'
		)

		let parent_categorys = []
		;[...parent_category_links_doms].forEach((elem) => {
			let name = elem.getElementsByClassName('s-crumbs__item-name')[0]
			name = inner_html_or_null(name)

			if (name != 'Главная') parent_categorys.push(name)
		})

		// category name
		const category_name = inner_html_or_null(header)

		// description
		const description_dom =
			document.getElementsByClassName('s-text__content')[0]

		const description = inner_html_or_null(description_dom)

		// images
		let images_dom
		if (description_dom)
			images_dom = description_dom.getElementsByTagName('img')

		let images = []
		if (images_dom) {
			;[...images_dom].forEach((elem) => {
				images.push(elem.src)
			})
		}

		let images_name = []
		images.forEach((elem) => {
			images_name.push(replace_image_src(elem))
		})

		// return
		return {
			parent_categorys,
			category_name,
			description,
			images,
			images_name,
		}
	} catch (e) {
		console.log(e)
	}
}
