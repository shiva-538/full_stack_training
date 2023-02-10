function check(){
    let a=12321
let rev=0
let rem=0
let num=a

while(a>0){
   let rem=a%10;
   rev=rev*10+rem;
   a=Math.floor(a/10);
    console.log(a)
}
document.write(rev)
if(rev==num){
    document.write("palindrome")
    console.log("palindrome")
}
else{
    document.write("not palindrome")
    console.log("not palindrome")
}

}
check()
