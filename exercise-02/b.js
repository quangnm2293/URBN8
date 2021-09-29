const api = new Promise(function (resolve, reject) {
	resolve(1);
});
const api2 = new Promise(function (resolve, reject) {
	resolve(2);
});
const api3 = new Promise(function (resolve, reject) {
	resolve(3);
});

api.then(result => {
	console.log('result: ', result);
	api2.then(result2 => {
		console.log('result2: ', result2);
		api3.then(result3 => {
			console.log('result3: ', result3);
		});
	});
});
// Will print to browser/nodejs console:
// result: 1
// result2: 2
// result3: 3
