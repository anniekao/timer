const args = process.argv.slice(2).map(arg => Number(arg));

const timer = (args) => {
  for (const arg of args) {
    if (Math.sign(arg) > 0 && Number.isInteger(arg)) {
      setTimeout(() => {
        console.log('.');
      }, arg * 1000);
    }
  }
};

timer(args);