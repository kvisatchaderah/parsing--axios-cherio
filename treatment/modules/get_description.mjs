export default async (text) => {
	return text
		.replace(/'/g, '')
		.replace(/\n/g, '')
		.replace(/\t/g, '')
		.replace(/&nbsp;/g, ' ')
		.replace(/style=".*"/g, '')
		.replace(/  /g, ' ')
}
