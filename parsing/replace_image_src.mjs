export default (src) => {
	return src.replace(/\/.*\//, '').replace(/https:/, '')
}
