let i = 2;
let resul = "";
while (i<=30) {
    if (i%2==0) {
        resul += `${i},`;
    }
    i++;
}
console.log(`${resul.slice(0,-1)}`);