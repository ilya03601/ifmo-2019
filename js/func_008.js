// https://kodaktor.ru/func_8e2c5

(async function () {
  const funcs = await fetch('https://3336.kodaktor.ru/funcpsst', {
			method: 'post'
		})
		.then(response => response.text())
		.then((x) => JSON.parse(x));
	const mapFunc = x => parseInt(x.value);
	const valuesF0 = Array.from(document.querySelectorAll(".f0")).map(mapFunc);
	const valuesF1 = Array.from(document.querySelectorAll(".f1")).map(mapFunc);
	const functions = funcs.g.map(
		function (elem) {
			return new Function('x', elem);
		}
	);
	console.log(functions[0](valuesF0));
	console.log(functions[1](valuesF1));
})();