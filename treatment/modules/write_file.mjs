// import modules
import fs from 'fs'

// function
export default async (data, file_name) => {
	await fs.writeFile(
		`./data/${file_name}.json`,
		JSON.stringify({ data }),
		(err) => {
			if (err) console.log(err)
			else console.log(`saved ${file_name}.json`)
		}
	)
}
