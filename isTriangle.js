const isTriangle = (a, b, c) => {
  const longest = Math.max(a, b, c);

  if (numsInvalid(a, b, c))
    return false;

  switch(longest) {
    case a:
      return (b ** 2) + (c ** 2) === a ** 2;
    case b:
      return (a ** 2) + (c ** 2) === b ** 2;
    case c:
      return (a ** 2) + (b ** 2) === c ** 2;
  }
};

const numsInvalid = (a, b, c) => {
  if ( !a || !b || !c )
    return true;
  if ( a < 0 || b < 0 || c < 0 )
    return true;

  return false;
};

module.exports = isTriangle;