import replace_image_src from './replace_image_src.mjs'

export default async (dom) => {
	try {
		// parent category
		const parent_category_links_doms = dom('.s-crumbs__item-link')

		let parent_categorys = []
		for (let i = 0; i < parent_category_links_doms.length; i++) {
			const name = dom('.s-crumbs__item-link')
				.eq(i)
				.find('.s-crumbs__item-name')
				.html()
				.trim()
			if (name != 'Главная') parent_categorys.push(name)
		}

		// category name
		const category_name = dom('.p-shop-catalog-header__title')
			.text()
			.trim()

		// description
		let description = ''
		if (dom('.s-text__content').html())
			description = dom('.s-text__content').html().trim()

		// images
		let images = []
		let images_dom

		if (dom('.s-text__content').html())
			images_dom = dom('.s-text__content').find('img')

		if (images_dom) {
			for (let i = 0; i < images_dom.length; i++) {
				images.push(images_dom[i].attr('src'))
			}
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
