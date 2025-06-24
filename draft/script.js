function adj()
{
    let a="Crazy";
    let b="Amazing";
    let c="Fire";
    let d=Math.trunc(Math.random()*10)%3;
    if(d==0){return a;}
    else if(d==1){return b;}
    else {return c;}

}
function sn()
{
    let a="Engine";
    let b="Foods";
    let c="Garments";
    let d=Math.trunc(Math.random()*10)%3;
    if(d==0){return a;}
    else if(d==1){return b;}
    else {return c;}
}
function aw()
{
    let a="Bros";
    let b="Limited";
    let c="Hub";
    let d=Math.trunc(Math.random()*10)%3;
    if(d==0){return a;}
    else if(d==1){return b;}
    else {return c;}
}
console.log(adj()+sn()+aw());