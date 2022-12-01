// import modules
export default async (connection, table_name) => {
	const sql_for_delete_table = `DELETE FROM ${table_name}`

	connection.query(sql_for_delete_table, function (err, results) {
			if (err) console.log(err)
			else console.log(results)
		})
}

