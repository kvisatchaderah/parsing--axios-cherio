// import function
import clear_to_table from '../functions/clear_to_table.mjs'
import load_to_data from '../functions/load_to_data.mjs'
import query from '../functions/query.mjs'

export default async (connection, DB_name) => {
	await clear_to_table(connection, DB_name)
	const data = await load_to_data(DB_name)
	const data_products = await load_to_data('s_products')

	let k = 0
	for (let i = 0; i < data_products.length; i++) {
		for (let e = 0; e < data_products[i].images_name.length; e++) {
			++k

			const sql = `INSERT INTO ${DB_name}(
				id,
				product_id,
				filename,
				position
			) VALUES(
				'${k}',
				'${data_products[i].id}',
				'${data_products[i].images_name[e]}',
				'${k}'
			)`
			query(connection, sql)
		}
	}
}
