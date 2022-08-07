//Group array of strings by first letter
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
function myFunction(arr) {
    var a = [];
    var b = [];
    arr.map((val) => {
        let c = arr[0].charAt(0);
        c == val.charAt(0) ? a.push(val) : b.push(val);
    });
    var e = {};
    e[a[0].charAt(0).toLowerCase()] = a;
    e[b[0].charAt(0).toLowerCase()] = b;
    return e;
}

//author
function myFunction(arr) {
    return arr.reduce((acc, cur) => {
        const firstLetter = cur.toLowerCase().charAt(0);
        return {...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
    }, {});
}
//class
let a = [];

for (temp of arr) {
    if (!a.includes(temp.charAt(0))) a.push(temp.charAt(0));
}

temp = {};

for (temp1 of a) {
    let i = [];
    for (temp2 of arr) {
        if (temp1 == temp2.charAt(0)) {
            i.push(temp2);
        }
    }
    temp[temp1.toLowerCase()] = i;
}

return temp;

//github
function myFunction(arr) {
    return arr.reduce((pv, cv) => {
        const c = cv[0].toLowerCase();
        return {...pv, [c]: [...(pv[c] || []), cv] };
    }, {});
}