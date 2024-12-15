function foo(x) {
  if (x === null || x === undefined || typeof x === 'object' && x.length === undefined) {
    return 0; // Handle null, undefined, or objects without length
  }
  return x.length; // Safe to access length now
}