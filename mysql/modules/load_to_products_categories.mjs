// import function
import clear_to_table from '../functions/clear_to_table.mjs'
import load_to_data from '../functions/load_to_data.mjs'
import query from '../functions/query.mjs'

export default async (connection, DB_name) => {
	await clear_to_table(connection, DB_name)
	const data = await load_to_data(DB_name)

	for (let i = 0; i < data.length; i++) {
		const sql = `INSERT INTO ${DB_name}(
				product_id,
				category_id,
				position
			) VALUES(
				'${data[i].product_id}',
				'${data[i].category_id}',
				'${data[i].position}'
			)`
		query(connection, sql)
	}
}
