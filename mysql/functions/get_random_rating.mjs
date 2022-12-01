// import modules
export default () => {
	const random = Math.ceil(100 * Math.random())

	if (random < 5) {
		return 1 + (random % 10) / 10
	} else if (random < 15) {
		return 2 + (random % 10) / 10
	} else if (random < 35) {
		return 3 + (random % 10) / 10
	} else if (random < 90) {
		return 4 + (random % 10) / 10
	} else {
		return 5
	}
}
