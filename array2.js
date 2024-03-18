const coviddata = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

// console.log(coviddata);



//1. district having Highest +ve case - 


const positivecases = coviddata.reduce((p1, p2) => (p1[2] > p2[2] ? p1 : p2))[1];
console.log(positivecases); 


//2. district having Highest 1st dose vaccine - 

const dose = coviddata.reduce((p1, p2) => (p1[5] > p2[5] ? p1 : p2))[1];
console.log(dose); 


//3. district having lowest death rate - 
const dt = coviddata.reduce((p1, p2) => (p1[3] < p2[3] ? p1 : p2))[1];
console.log(dt); 

//4. sort data with +ve case in descending order - 

let desc= coviddata.sort(function(a, b){return b[2] - a[2]});
console.log(desc);


    
//5. is district with +ve cases > 15000 - 
const pc = coviddata.some(district => district[2] > 15000);
console.log(p);

//6. sort data with 1st dose vaccine - 

console.log( coviddata.sort(function(a, b){return a[5] - b[5]}));


// 7. Print Thrissur details - 

let Thrissur=coviddata.at(2)
console.log(Thrissur);