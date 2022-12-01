// import modules
import fs from 'fs'

export default async (data_name) => {
	return await JSON.parse(fs.readFileSync(`./data/${data_name}.json`)).data
}

