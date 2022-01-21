const findEvenToFifty = () => {
  return [...Array(50).keys()].map((x) => x + 1).filter((x) => x % 2 === 0);
};
