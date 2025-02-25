console.log(this)
let obj={
    name:"santanu",
    age:25,
    // myFun:function(){
    //     console.log(this)
    //     console.log(this.name,this.age)
    //     console.log("Hello");
    // },
    myFun:()=>{
        console.log(this)
        console.log(this. name,this.age)
        console.log("Hello");
    },
    NewfObj:{
        san:"hndnhjd",
        mtfunc:function(){
            console.log(this)
        }
    }
}
console.log(obj.myFun())
console.log(obj.NewfObj.mtfunc())
obj.NewfObj.mtfunc()




const arrowFunction=()=>{
    let a=10;
    let b=20;
    let c=a+b;
    return c;
}
let result=arrowFunction();
console.log(result)



//conditional statement
let a=40;
let b=40;
if(a>b){
    console.log(`${b} is greater than ${a}`);
}
else if(a==b){
    console.log("Both are equal");
}
else{
    console.log("B is greater than A");
}




//let suppose you have one num as input you have to check if num is multiple of 3 then print "fizz" if multiple of 5 then print "buzz" if multiple of 3 and 5 then print "fizzbuzz" else print the number
let num=15;
if(num%3==0 && num%5==0 ){
    console.log("fizzBuzz");
}else if(num%5==0){
    console.log("BUZZ");
}else if(num%3==0){
    console.log("Fizz")

}





//for loop
// for(start;condition;increment/decrement){
//     //code
// }
let num1 =10;
for(let i=0;i<=num1;i++){
    console.log(i,num1);
}
// for(let i=0;i<5;i++){
//     console.log(i)
// }





let arr=[1,2,3,4,5,6,7,8,];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let str="santanu";
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
let str1="santanu";
for(let i=0;i<str1.length;i++){
    console.log( "a"+str1[i],"b");
}
