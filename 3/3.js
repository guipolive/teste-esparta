// Autor: Guilherme Passos de Oliveira
// Enunciado da questão: https://gist.github.com/esparta-io/945c0f95d96b04be7509b53a10485147#file-euclidean-md
function getEatedChocolates(chocolates, jumps) {
    var eatedChocolates = [];
    var eated = false;
    for (var i = 0; !eated; i = ((i + jumps) % chocolates)) {
        for (var j = 0; j < eatedChocolates.length; j++) {
            if (eatedChocolates[j] == i) {
                eated = true;
                break;
            }
        }
        if (eated) {
            return eatedChocolates.length;
        }
        else {
            eatedChocolates.push(i);
        }
    }
}
var N = 10;
var M = 4;
var response = getEatedChocolates(N, M);
console.log(response);
/// Observações do teste:
// 1. Para rodar: 'tsc 3.ts; node 3.js'
