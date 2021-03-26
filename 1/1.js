// Autor: Guilherme Passos de Oliveira
function unpairedNumber(array) {
    if (array.length % 2 == 0)
        return 'Invalid array! Array should have an odd number of elements.';
    if (array.length == 0)
        return 'Null array!';
    var sentinel = array.pop();
    var counter = 0;
    var auxArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == sentinel) {
            counter++;
        }
        else
            auxArray.push(array[i]);
    }
    if (counter % 2 == 0 || counter == 0) {
        console.log("The unpaired number is " + sentinel);
    }
    else {
        unpairedNumber(auxArray);
    }
}
var testArray = [1, 1, 2, 2, 3, 4, 3];
unpairedNumber(testArray);
/// Observações do teste:
// 1. Para rodar: 'tsc 1.ts; node 1.js'
// 2. Estamos assumindo, de acordo com o enunciado da questão, que o array tem somente um elemento sem par. Logo, a função retornará o primeiro elemento sem par, sem tratar se existe mais de um.
