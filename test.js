const multipy = require ("./server");

console.log (multipy (3,3)); 

test ("testing multiply function" , () => {
    expect (multipy (3,3)).toEqual (9);
})