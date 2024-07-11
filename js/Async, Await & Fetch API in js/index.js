// async function getData() {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve(699)
//     }, 1000);
//   })
// }

async function getData() {
  // Simulate getting data from a server
  //let x = await fetch('https://jsonplaceholder.typicode.com/todos/21')

  // Simulate getting data from a server
  let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // method : post, delete or bhi request use kr skte he .. or jyada se jyada data de skte he ...
    body: JSON.stringify({
      title: 'Rahul',
      body: 'Good',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  // 
  let data = await x.json();
  return data;
}

async function main() {
  console.log("Loding Modules")

  console.log("Do someting else")

  console.log("load data")

  let data = await getData(); // await ka use hm async fuction ke aner hi chalega

  console.log(data)

  console.log("process data")
  console.log("task 2")
}
main();