// Using promise
function addWithPromise(a, b) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if(!a || !b){
            reject('This function need two numbers as parameters')
        }
        resolve(a + b)
      }, 1000)
    })
   }

// .then in promise
addWithPromise(2,3)
 .then((reply) => {
   console.log("Using promise with .then:", reply)
 })

 // catching the Unhandle Error
 .catch(err=>console.log(err))

// using await in async function using promise
async function getResult() {
    try {
    const result = await addWithPromise(3)
    console.log("Using promise with async and await: ", result);
    } catch(err) {
       console.log(err)
    }
}

getResult()
   
