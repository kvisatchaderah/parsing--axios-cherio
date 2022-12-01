export default async () => {
	try {
	let result = []
	const product_items = document.getElementsByClassName('shop-catalog__item')
	
	;[...product_items].forEach(item=>{
		result.push(item.getElementsByClassName('shop-catalog__item-title-link')[0].href)
	})

	return result
		
	} catch (e) {
		console.log(e)
	}
}
