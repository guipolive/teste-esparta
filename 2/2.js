// Autor: Guilherme Passos de Oliveira
// Enunciado da questão: https://gist.github.com/esparta-io/945c0f95d96b04be7509b53a10485147#file-distinct-md
function differentNumbers(array) {
    if (array.length == 0)
        return 'Null array!';
    var sentinel = array.pop();
    var repeated = false;
    var auxArray = [sentinel];
    for (var i = 0; i < array.length; i++) {
        repeated = false;
        for (var j = 0; j < auxArray.length; j++) {
            if (array[i] == auxArray[j]) {
                repeated = true;
                break;
            }
        }
        if (!repeated) {
            auxArray.push(array[i]);
        }
    }
    return "The number of different items is " + auxArray.length;
}
var testArray = [1, 2, 2, 3];
var response = differentNumbers(testArray);
console.log(response);
/// Observações do teste:
// 1. Para rodar: 'tsc 2.ts; node 2.js'
