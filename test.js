const intervalId = setInterval(() => {
  console.log('James');
}, 100);

setTimeout(() => {
  const promise = new Promise((resolve) => {
    console.log('Richard');
    resolve('Robert');
  });

  promise
      .then((value) => {
        console.log(value);

        setTimeout(() => {
          console.log('Michael');

          clearInterval(intervalId);
        }, 100);
      });

  console.log('John');
}, 100);
