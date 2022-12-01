// import modules
import mysql from 'mysql2'

export default async () => {
	return await mysql.createConnection({
		host: '188.225.21.131',
		database: 'odinpromptt_sspc',
		user: 'odinpromptt_sspc',
		password: 'ssp63466346',
	})
}