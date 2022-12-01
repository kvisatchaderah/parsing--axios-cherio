// import function
import clear_to_table from '../functions/clear_to_table.mjs'
import load_to_data from '../functions/load_to_data.mjs'
import query from '../functions/query.mjs'

export default async (connection, DB_name) => {
	await clear_to_table(connection, DB_name)
	const data = await load_to_data('s_products')

	for (let i = 0; i < data.length; i++) {
		if (data[i].article == '-') data[i].article = ''
		
		const sql = `INSERT INTO ${DB_name}(
				id,
				product_id,
				sku,
				price,
				position
			) VALUES(
				'${data[i].id}',
				'${data[i].id}',
				'${data[i].article}',
				'${data[i].price}',
				'1'
			)`

		query(connection, sql)
	}
}
