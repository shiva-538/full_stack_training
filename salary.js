
let salary=[3000,4000,5000,2000]
let a=salary.find(function(item){
    return item===2000
})
console.log(a)
salary.pop(2000)
document.write(salary)
console.log(salary)