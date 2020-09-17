// Nodejs example flow

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// * 1 - Run file and execute all code inside of it
myFile.runContent();

function shouldContinue() {
  // 1 and pending setTimeout, setInterval, setImmediate
  // 2 any pending OS tasks http server on a port
  // 3 any pending long running operations calls the fs module
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// * 2 - Enter the event loop
while (shouldContinue()) {
  // 5 checks
  // 1 - pendingTimers (setTimout or setInterval)
  // 2 - looks pendingOSTasks and pendingOperations 
  // 3 pauses execution, 
  // 4 setImmediate 
  // handles and close events
}

// * 3 - Exit back to terminal
