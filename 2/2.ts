// Autor: Guilherme Passos de Oliveira
// Enunciado da questão: https://gist.github.com/esparta-io/945c0f95d96b04be7509b53a10485147#file-distinct-md

function differentNumbers(array: number[]) {
	if(array.length == 0)
		return 'Null array!';

	const sentinel = array.pop();

	let repeated = false;
	let auxArray = [sentinel];

	for(let i=0; i<array.length; i++) {
		repeated = false;
		for(let j=0; j<auxArray.length; j++) {
			if(array[i] == auxArray[j]) {
				repeated = true;
				break;
			}
		}
		if(!repeated) {
			auxArray.push(array[i]);
		}
	}
	
	return `The number of different items is ${auxArray.length}`;
}

const testArray = [1, 2, 2, 3];

const response = differentNumbers(testArray);

console.log(response);

/// Observações do teste:

// 1. Para rodar: 'tsc 2.ts; node 2.js'
