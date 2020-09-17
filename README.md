# Nodejs examples

## Improving Node performance

1. Use Node in cluster mode *Recommended*
2. Use worker threads 

### Cluster Mode

*Cluster Manager* - Doesnt execute app code. Monitors the health of individual instances.

### `libuv`

Open source project written in C++ that gives access to the OS's underlying 
file system, networking capabilities, and handles some aspects of concurrency.

### V8

Open source JavaScript Engine created by Google to execute JavaScript outside
of the browser. 

#### Random Notes

* *Event Loop* - Handles asynchronous code we write in our apps
* 2 ways to improve the rate threads are processed by Node: increase CPU cores, allow OS scheduler to detect big pauses in processing time due to expensive IO Operations
* **tick** - Execution of the event loop body
* **Threadpool** - Collection of threads allocated by libuv to run certain operations concurrently
* FS module and some functions in the crypto module take advantage of the threadpool
* Network requests do NOT use the threadpool, these are handed off the OS itself
