function api(f) {
	f(1);
}
function api2(f) {
	f(2);
}
function api3(f) {
	f(3);
}

api(function (result) {
	console.log('result: ', result);
	api2(function (result2) {
		console.log('result2: ', result2);
		api3(function (result3) {
			console.log('result3: ', result3);
		});
	});
});
// Will print to browser/nodejs console:
// result: 1
// result2: 2
// result3: 3
