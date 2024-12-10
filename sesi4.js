const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Masukan perhitungan: `, angka => {
    let tmp=0
    let operator="+"
    for (let i=0;i<angka.length;i++){
        if(angka[0]=="+" || angka[0]=="-"){
            console.log("inputan salah")
            break
        }
        if(!isNaN(angka[i])){
            let a=angka[i]
            while (!isNaN(angka[i + 1]) && i + 1 < angka.length) {
                a += angka[i + 1];
                i++;
            }
            let tmpangka=parseInt(a)
            switch (operator) {
                case "+":
                    tmp += tmpangka;
                    break;
                case "-":
                    tmp -= tmpangka;
                    break;
            }
        }
        else{
            operator=angka[i]
        }
        
    }
    console.log(`Hasil perhitungan: ${tmp}`);
  rl.close();
});
