// import modules
import fs from 'fs'

// function
export default async (data) => {
	await fs.writeFile(`data.json`, JSON.stringify({ data }), (err) => {
		if (err) console.log(err)
		else console.log(`saved data.json`)
	})
}
