const pointA = new Point(3, 5);
const pointB = new Point(6, 1);
const pointC = new Point(7, 1);
const pointD = new Point(3, 6);
const pointE = new Point(1, 1);
const pointF = new Point(-2, 1);

const distance = MathC.calculateDistance(pointA, pointB)

const median = MathC.medianPoint(pointA, pointB)

const distanceO = MathC.distanceFromOrigin(pointA)

const nearest = MathC.nearestPoint(pointA, pointB, pointC, pointD, pointE, pointF)

console.log(distance);
console.log(median);
console.log(distanceO);
console.log(nearest);

console.log(pointA.distanceFrom(pointB));  //distancefromB
console.log(pointA.distanceFromOriginP());  //distancefromOriginc
console.log(pointA.medianPointFromPoint(pointB));  //medianFromB
console.log(pointA.nearestPoint(pointB, pointC, pointD, pointE, pointF));  //nearestToA


const seg1 = new Segment(pointA, pointB)
// console.log(seg1.length);
// console.log(seg1.median);



const pointsqA = new Point(1, 1);  //BL
const pointsqB = new Point(1, 3);  //TL
const pointsqC = new Point(7, 1);  //BR
const pointsqD = new Point(7, 3);  //TR

console.log(pointsqA.distanceFrom(pointsqB));
console.log(pointsqA.distanceFrom(pointsqC));

console.log(pointsqA.calculatePerimeter(pointsqB, pointsqC));  //isn't accepting more than 3 points for some reason

console.log(pointsqA.calculateArea(pointsqB, pointsqC));
console.log(pointsqD.calculateArea(pointsqB, pointsqC));
console.log(pointsqB.calculateArea(pointsqA, pointsqD));


const rect1 = new Rectangle(pointsqA, pointsqB, pointsqC, pointsqD)
console.log(rect1.perimeter());
console.log(rect1.area());

const tri1 = new Triangle(pointsqA, pointsqB, pointsqC)

const rect2 = new Rectangle2(pointsqA, 6, 2)
console.log(rect2.perimeter());
console.log(rect2.area());
console.log(rect2.point2());
console.log(rect2.point3());
console.log(rect2.point4());

const rect3 = new Rectangle3(pointsqB, pointsqC)
console.log(rect3.pointTopRight());
console.log(rect3.pointBottomLeft());

console.log(rect3.perimeter());
console.log(rect3.area());

const mappa = new Map();  //key-value, with this key can be anything not just a string

// mappa.set(1, "poo")
// mappa.set(2, "pee")
// console.log(mappa);



