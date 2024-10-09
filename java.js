let num=[]
let i
let intervalo=[]
for(i=0;i<10;i++){

    num[i]= Number (prompt("Digite um valor"))


}

for(i=0;i<2;i++){

    intervalo[i]= Number (prompt("Digite um intervalo de valores"))

}

for(i= 0; i<10; i++){



        if(num[i]>=intervalo[0] && num[i]<=intervalo[1]){

            console.log(`${i}= ${num[i]}`)


        }
}



