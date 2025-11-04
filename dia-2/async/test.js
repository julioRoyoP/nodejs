console.log("Start")   //sincrono
setTimeout(()=>console.log("Timeout"),0) //sincrono->callback(Task)
Promise.race([Promise.resolve(),Promise.resolve()])
        .then(()=>console.log("Promise 1")) //sincono->callback(Microtask)
        .then(()=>console.log("Promise 2")) //sincono->callback(Microtask)
console.log("End") //sincrono

/*
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
https://www.youtube.com/watch?v=8aGhZQkoFbQ
*/
/*
    js stack
    microtask
    task
    //event loop
*/
/*
 Start
 Timeout
 Promise 1
 Promise 2
 End
*/

/*
 Start
 Promise1
 Promise2
 Timeout
 End
*/

/*
  Start
  End
  Promise1
  Promise2
  Timeout
 */