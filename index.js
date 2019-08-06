

const runtime = (method) => {
  console.time(`${method.name} runtime`);
  method();
  console.timeEnd(`${method.name} runtime`);
};