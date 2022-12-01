export default (connection, sql) => {
	return connection.query(sql, function (err, results) {
			if (err) console.log(err)
			else console.log(results)
		})
}

