function delayedGreeting() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello, world! (After 1 second)");
    }, 1000);
  });
}

async function sayGreeting() {
  console.log("Start: Fetching greeting...");
  

  const message = await delayedGreeting();
  
  console.log(message);
  console.log("End: Greeting received.");
}

sayGreeting();

console.log("This line runs immediately, without waiting for the greeting.");