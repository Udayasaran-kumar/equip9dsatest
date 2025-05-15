let maintenance_logs = [[101, "2024-01-01", 500], [102, "2024-01-10", 300], [101, "2024-01-15", 700]];
let queries = [["2024-01-01", "2024-01-10"], ["2024-01-01", "2024-01-15"]];
let arr=[];
for(let i=0;i<queries.length;i++){
    let start =queries[i][0];
    let end=queries[i][1];
    let sum=0;
    for(let j=0;j<maintenance_logs.length;j++){
        sum+=maintenance_logs[j][2];
        if(maintenance_logs[j][1]==end) break;
    }
    arr.push(sum);
}
console.log(arr);
//Here with date range of details and maintenance , I have given the result array of amount spent on maintenance.