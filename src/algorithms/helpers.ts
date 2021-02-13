export const timeout = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  })
}

export const range = (start: number, stop: number): ReadonlyArray<number> => {
  return [...Array(stop).keys()].slice(start);
}