//const prompt = require('prompt-sync')({ sigint: true });
//process.stdout.write('\x07);

const timer = () => {
  //const args = ["1", "2", "3"];
  const args = process.argv.slice(2);
  let max = maxTime(args);
  process.stdout.write(max.toString());

  let interval = setInterval(() => {
    max--;
    process.stdout.write(`\r${max}`);
  }, 1000);

  setTimeout(() => {
    process.stdout.write('\x07');
    clearInterval(interval);
  }, max * 1000);

  args.forEach(element => {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element);
  });
};

const maxTime = (args) => {
  let max = 0;
  args.forEach(element => {
    if (parseInt(element) > max) {
      max = parseInt(element);
    }
  });
  return max;
};
timer();