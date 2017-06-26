const area = rec => rec.width * rec.height;
const perimeter = rec => (rec.width * 2) + (rec.height * 2);
const isSquare = rec => rec.width === rec.height;
const diagonal = rec => {
  let a = rec.width ** 2;
  let b = rec.height ** 2;

  return Math.sqrt(a + b);
};

module.exports = {
  area: area,
  diagonal: diagonal,
  perimeter: perimeter,
  isSquare: isSquare
};