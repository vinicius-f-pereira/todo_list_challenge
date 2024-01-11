const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function dadosRank() {
    const vitorias = await new Promise((resolve) => {
        r1.question("Digite o número de vitórias do seu herói: ", resolve);
    });
    const derrotas = await new Promise((resolve) => {
        r1.question("Digite o número de derrotas do seu herói: ", resolve);
    });
    const saldoVitorias = vitorias - derrotas;
    return { saldoVitorias };
}
dadosRank().then(({ saldoVitorias }) => {
    let nivelDoHeroi;

if (saldoVitorias <= 10) {
    nivelDoHeroi = "Ferro";
    }
else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivelDoHeroi = "Bronze";
    }
else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivelDoHeroi = "Prata";
    }
else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivelDoHeroi = "Ourto";
    }
else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivelDoHeroi = "Diamante";
    }
else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivelDoHeroi = "Lendário";
    }
else {
    saldoVitorias = "Imortal";
    } 

    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivelDoHeroi);

    r1.close();
});