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





const distancefromB = pointA.distanceFrom(pointB)
const distancefromOriginc = pointA.distanceFromOriginP()
const medianFromB = pointA.medianPointFromPoint(pointB)
const nearestToA = pointA.nearestPoint(pointB, pointC, pointD, pointE)

console.log(distancefromB);
console.log(distancefromOriginc);
console.log(medianFromB);
console.log(nearestToA);