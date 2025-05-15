let requests = [["excavator", 50000], ["bulldozer", 70000]];
let sellers = [["excavator", 45000], ["bulldozer", 68000], ["excavator", 48000]];
let a=50000,b=70000;
for(let i=0;i<sellers.length;i++){
    // console.log(sellers[i]);
        if(sellers[i][0]==='excavator'){
            a=Math.min(a,sellers[i][1])
        }
         if(sellers[i][0]==='bulldozer'){
            b=Math.min(b,sellers[i][1])
        }
    
}
// console.log(a,b);
let arr=[a,b];
console.log(arr);
//Here with the details of request rate and provided rate I have given the result of possible and successfull purchse detail.