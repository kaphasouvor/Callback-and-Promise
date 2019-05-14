var result = undefined;

function add(a, b, sum){
sum = a+b;
}

// simulate a server api call
setTimeout(() => add(1,2,result), 1000);
 console.log("Synchronous result:", result);
 console.log("Running some code here");

 function addWithCallback(a, b, callback){
    const sum = a + b;
    callback(sum)
}

function printResult(value){
    console.log("Callback results: ", value);
}

setTimeout(() => addWithCallback(5,7, printResult), 10);
setTimeout(() => addWithCallback(2,3, printResult), 0);

console.log("Running some more code");