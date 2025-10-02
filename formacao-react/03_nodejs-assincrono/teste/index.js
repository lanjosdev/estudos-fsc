let a = 0;
console.log("1");
console.log("2");

console.time("tempo");
// Execução assíncrona (não atrasa a execução do código, não bloqueia o evento loop. Assim o setTimeout é executado em 5 segundos, no caso é agendado para 5 segundos)
setTimeout(() => {
    console.log("4");
    console.timeEnd("tempo");
}, 5000);

// Execução bloqueante (atrasa a execução do código, bloqueia o evento loop. Assim o setTimeout não é executado em 5 segundos)
for (let i = 0; i < 10000000000; i++) {
    a++;
}

console.log("3");