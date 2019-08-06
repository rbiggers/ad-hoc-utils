
const Adhoc = () => {

  /**
   * Measure the runtime of a method in milliseconds
   * @param {*} method 
   */
  const runtime = (method) => {
    console.time(`${method.name} runtime`);
    method();
    console.timeEnd(`${method.name} runtime`);
  };

  return {
    runtime,
  }
}

module.exports = Adhoc();
