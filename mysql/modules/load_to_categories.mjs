// import function
import clear_to_table from '../functions/clear_to_table.mjs'
import load_to_data from '../functions/load_to_data.mjs'
import query from '../functions/query.mjs'

export default async (connection, DB_name) => {
	await clear_to_table(connection, DB_name)
	const data = await load_to_data(DB_name)

	for (let i = 0; i < data.length; i++) {
		const sql = `INSERT INTO ${DB_name}(name, meta_title, url, id, description, parent_id) VALUES('${data[i].name}', '${data[i].name}', '${data[i].url}', '${data[i].id}', '${data[i].description}', '${data[i].parent_id}')`

		query(connection, sql)
	}
}
