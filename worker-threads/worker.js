const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async ({ a, b }) => {
  await sleep(100);
  return a + b;
};
