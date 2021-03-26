// Autor: Guilherme Passos de Oliveira
// Enunciado da questão: https://gist.github.com/esparta-io/945c0f95d96b04be7509b53a10485147#file-array-md

function unpairedNumber(array: number[]) {
	if(array.length % 2 == 0)
		return 'Invalid array! Array should have an odd number of elements.'
	if(array.length == 0)
		return 'Null array!'

	const sentinel = array.pop();
	let counter = 0;
	let auxArray = [];
	
	// Counting the elements equal to the sentinel and separating the different ones
	for(let i=0; i<array.length; i++) {
		if(array[i] == sentinel) {
			counter++;
		} else
			auxArray.push(array[i]);
	}

	// If the number of equal elements is even or 0, then we have the unpaired number
	if(counter % 2 == 0 || counter == 0) {
		console.log(`The unpaired number is ${sentinel}`)		
	} else {
		unpairedNumber(auxArray) // Else we call the function again with the separated numbers
	}
}

const testArray = [1, 1, 2, 2, 3, 4, 3];

unpairedNumber(testArray);

/// Observações do teste:

// 1. Para rodar: 'tsc 1.ts; node 1.js'

// 2. Estamos assumindo, de acordo com o enunciado da questão, que o array tem somente *um* elemento sem par. Logo, a função retornará o primeiro elemento sem par, sem tratar se existe mais de um.