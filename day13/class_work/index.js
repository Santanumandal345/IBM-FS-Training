let arr=["A",5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
arr.forEach((el,indext)=>{

console.log(el,indext);
})
for(let i=0;i<arr.length;i++){
    console.log(arr[i],i);
}
//map
let output=arr.map((el,index)=>{
    return el*2;
    
})
console.log(output);
//filter
let output1=arr.filter((el,index)=>{
    return el%2==0;
})
console.log(output1);
//reduce
let output2=arr.reduce((acc,el)=>{
    return acc+el;
},0)
console.log(output2)


let output3=arr.filter((el,index)=>{
    return typeof el!=="string"&& el%2==0;

}).map((el,index)=>{
    return el**2;
}).reduce((acc,el)=>{
    return acc+el;
})
console.log(output3);


let arr1=["1","2","3","4","santanu", " ","Mandal" ,"5","6","7","8","9","10"];



let output4=arr1.filter((el,index)=>{
    return typeof el==="string" && el%2!==0;

}).map((el,index)=>{
    return el+" ";
}).reduce((acc,el)=>{
    return acc+el;
})
console.log(output4);

let out=arr1.sort((a,b)=>{
    return a-b;
})
console.log(out);

let data=[{name:"santanu",age:25     
}
,{name:"soumya",age:26}
,{name:"sou",age:26}
,{name:"may",age:26}
]
let ans=data.sort((a,b)=>{
    const na=a.name.toLowerCase();
    const nb=b.name.toLowerCase();
    if(na<nb){
        return -1;
    }else if(na>nb){
        return 1;
    }

})
console.log(ans);
