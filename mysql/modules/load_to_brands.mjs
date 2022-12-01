// import function
import clear_to_table from '../functions/clear_to_table.mjs'
import load_to_data from '../functions/load_to_data.mjs'
import query from '../functions/query.mjs'

export default async (connection, DB_name) => {
	await clear_to_table(connection, DB_name)
	const data = await load_to_data(DB_name)

	for (const key in data) {
		const sql = `INSERT INTO ${DB_name}(
				id,
				name,
				url,
				meta_title
			) VALUES(
				'${data[key]}',
				'${key}',
				'brand-${data[key]}',
				'${key}'
			)`
		query(connection, sql)
	}
}
