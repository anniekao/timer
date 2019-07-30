const stdin = process.stdin;

// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

const timer = () => {
  stdin.on('data', (key) => {
    if (key === "\u0003") {
      process.exit();
    } else if (key === "\u0062") {
      console.log('beep');
    } else if (Number.isInteger(Number(key))) {
      console.log(`setting timer for ${key} seconds`);
      setTimeout(() => {
        console.log('beep');
      }, Number(key) * 1000);
    }
  });
};

timer();