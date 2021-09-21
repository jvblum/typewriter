const sentence = "hello there from lighthouse labs";

const typewriter = str => { // incomplete, will run multiple calls simultaneously, resulting in garbled print
  for (let i = 0; i <= str.length - 1; i++) {
    setTimeout(()=> {
      process.stdout.write(str[i]);
    }, 50 * i);
    if (i === str.length - 1) {
      setTimeout(()=> {
        process.stdout.write("\n");
      }, 50 * str.length + 1);
    }
  }
};