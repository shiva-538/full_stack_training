let city=["hyd","blr","vizag","chennai"]
let a=city.find(function(item){
    return item==="chennai"
})
console.log(a)
if(a=="chennai"){
    console.log("yes/exits")
}
else{
    console.log("doesn't exist")
}