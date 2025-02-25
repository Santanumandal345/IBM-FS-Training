// let str="SVU university"
// console.log(str.length)
// console.log(str[-1])
let arr=[1,2,"hello",true]
// console.log(arr.length)
// console.log(arr[-2])
arr[2]="bye"
// console.log(arr)
//     console.log(arr[arr.length-1])
// arr.push("valo")
// console.log(arr)
// arr[4]="gdffd"
// console.log(arr)
// arr.pop()

//object
//object Literal
//new key word
// consttructor
const obj={
    name:"john",
    age:25,
    isMarried:false,
    "last name":"doe"
}
const obj1={
    sant:{
        class:"10th",
        rollno:12,
        sub:["maths","science","cn","os"]
    }
}
console.log(obj1.sant)
console.log(obj1.sant.class)
console.log(obj1.sant.sub[2])
delete obj1["sant"]
console.log(obj1)
obj1.santabn={
    class:"10th",
    rollno:12,
    sub:["maths","science","cn","os"]
}
let name="pyeye"
let cklss="hgdfjh"
let sub ="jnhdjf"
let newobj={
    name,
    cklss,
    sub
}
console.log(newobj)