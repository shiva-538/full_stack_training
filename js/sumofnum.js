function sumofdigits(){
    let a=1234
    let sum=0
    while(a>0){
      sum=sum+a%10;
      a=Math.floor(a/10)
      document.write(sum)
    }
    console.log(sum)
    document.write("sum of the digits in a:"+sum)
    }
    sumofdigits()