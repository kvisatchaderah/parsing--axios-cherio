// import modules
export default () => {
	const random = Math.round(100 * Math.random())

	if (random < 25) return 0
	else if (random < 45) return 1
	else if (random < 55) return 2
	else if (random < 65) return 3
	else if (random < 75) return 4
	else if (random < 80) return 5
	else if (random < 85) return 6
	else if (random < 90) return 7
	else if (random < 95) return 8
	else if (random < 99) return 9
	else return 12
}
