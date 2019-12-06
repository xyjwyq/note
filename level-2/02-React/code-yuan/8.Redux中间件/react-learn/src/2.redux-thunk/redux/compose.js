export default function(...fns) {
  if (fns.length === 0) {
    return args => args;
  } else if (fns.length === 1) {
    return fns[0];
  }

  return function(...args) {
    let last;
    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i];
      if (i === fns.length - 1) {
        last = fn(...args);
      } else {
        last = fn(last);
      }
    }
    return last;
  };
}
