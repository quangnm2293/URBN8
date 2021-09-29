const api = f => {
	f(1);
};
const api2 = async f => {
	await f(2);
};
const api3 = async f => {
	await f(3);
};

api(async function (result) {
	console.log('result: ', result);
	await api2(async function (result2) {
		console.log('result2: ', result2);
		await api3(function (result3) {
			console.log('result3: ', result3);
		});
	});
});
// Will print to browser/nodejs console:
// result: 1
// result2: 2
// result3: 3
