// import function
import clear_to_table from '../functions/clear_to_table.mjs'
import load_to_data from '../functions/load_to_data.mjs'
import query from '../functions/query.mjs'
import get_random_rating from '../functions/get_random_rating.mjs'
import get_random_votes from '../functions/get_random_votes.mjs'

export default async (connection, DB_name) => {
	await clear_to_table(connection, DB_name)
	const data = await load_to_data(DB_name)
	const brands = await load_to_data('s_brands')

	for (let i = 0; i < data.length; i++) {
		let rating
		const votes = get_random_votes()
		votes == 0 ? (rating = 0) : (rating = get_random_rating())

		const sql = `INSERT INTO ${DB_name}(
				id,
				url,
				brand_id,
				name,
				body,
				visible,
				position,
				meta_title,
				featured,
				rating,
				votes
			) VALUES(
				'${data[i].id}',
				'${data[i].url}',
				'${brands[data[i].brand]}',
				'${data[i].name}',
				'${data[i].description}',
				'1',
				'${i}',
				'${data[i].name}',
				'0',
				'${rating}',
				'${votes}'
				);`

		query(connection, sql)
	}
}
