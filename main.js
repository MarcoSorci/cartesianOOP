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

const segment = pointA.distanceFrom(pointB);




const pointsqA = new Point(1, 1);
const pointsqB = new Point(1, 3);
const pointsqC = new Point(6, 1);
const pointsqD = new Point(6, 3);

console.log(pointsqA.distanceFrom(pointsqB));
console.log(pointsqA.distanceFrom(pointsqC));

console.log(pointsqA.calculatePerimeter(pointsqB, pointsqC));  //isn't accepting more than 3 points for some reason

console.log(pointsqA.calculateArea(pointsqB, pointsqC));
console.log(pointsqD.calculateArea(pointsqB, pointsqC));
console.log(pointsqB.calculateArea(pointsqA, pointsqD));




