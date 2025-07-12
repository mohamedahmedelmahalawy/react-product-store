export const range = (start, end, steps = 1) => {
  const output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += steps) {
    output.push(i);
  }
  return output;
};
