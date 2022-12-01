// functions
export default function (url) {
	return url
		.match(/[^/]+\/[^/]+$/)[0]
		.replace(/\//, '-')
}