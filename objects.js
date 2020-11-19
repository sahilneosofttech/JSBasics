
// primitive data types/ non-primitive data types
// primitive data types
// number, string, boolean, undefined

let a = 100 // primitive data types

// non-primitive data types
// objects, array, null

let z = {
    abc: '100', 
    xyz : '200'
}

let arr = [10, 20, 30, 40]

// js is based on expressions based language

const c = 100 + 200; // int c = 100 + 200;

function add () {}
if(add()) { // if(add()) {}

}

let obj = { /// 1000 // 2000 // table => key, value
    a : 10,
    b : 20,
    // c : 30
}

obj.c = 30;
obj.d = 'string';
obj.e = {
    x : 100,
    y: 100
}
obj.f = [10, 20, 30, 40]
obj.result = obj.a + obj.b
delete obj.a;


// various types to show objects
// . notation
console.log("obj.b ==> ", obj.b)

// [] notation
console.log("obj['b'] ==> ", obj['b'])

const abc = "b"
console.log("obj[abc] ==> ", obj[abc])

obj.xyz = 60;
console.log("obj.xyz ==> ", obj.xyz)
console.log("obj => ", obj)
