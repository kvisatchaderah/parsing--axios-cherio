export default async (link) => {
		return link
			.replace(/^https:\/\/goldholod.com\//, '')
			.replace(/catalog\//, '')
			.replace(/\/$/g, '')
			.replace(/,/g, '')
			.replace(/'/g, '')
			.replace(/\//g, '-')
			.replace(/_/g, '-')
}