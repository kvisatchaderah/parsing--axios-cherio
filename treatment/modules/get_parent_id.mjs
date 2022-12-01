export default async (data, parent_categorys) => {
	let parent_category_id

	const parent_category_name = parent_categorys[parent_categorys.length - 1]

	for (let i = 0; i < data.length; i++) {
		if (data[i].name == parent_category_name) { 						parent_category_id = data[i].id
			break
		}
	}

	return parent_category_id
}