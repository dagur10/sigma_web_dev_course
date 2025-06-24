let n=prompt("enter no:");
let arr=[];
for(let i=1;i<=n;i++){arr.push(i);}
const mul=(a,b)=>{
    return a*b;
}
console.log(arr.reduce(mul));