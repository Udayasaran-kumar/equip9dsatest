let n = 5;
let edges = [[1, 2], [2, 3], [3, 4], [4, 5]];
let availability = {1: "excavator", 2: '', 3: "bulldozer", 4: "excavator", 5: "crane"};
let start_provider = 2;
let target_equipment = "excavator";
let arr=[];
for(let i=start_provider-1;i<edges.length;i++){
    arr.push(edges[i][0]);
   if((availability[edges[i][0]]===target_equipment)&&(edges[i][1]>=n)) break;
    
}
console.log(arr);