function greatest(){
    let salary = [100000 , 12000,3000,4000];
let max = salary[0];

for (let i = 0; i < salary.length; i++) {
    if (salary[i]>max) {
        max=salary[i];
    }
}
console.log(max);
document.write(max)
}
greatest()