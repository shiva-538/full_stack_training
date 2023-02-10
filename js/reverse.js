function reverse(){
let a=123
let rev=0
let rem=0

while(a>0){
   let rem=a%10;
   rev=rev*10+rem;
   a=Math.floor(a/10);
    console.log(a)
}
console.log(rev)
document.write(rev)
}
reverse()