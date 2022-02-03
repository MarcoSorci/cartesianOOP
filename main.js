const pointA = new Point(3,5);

const pointB = new Point(6,1);

const distance = MathC.calculateDistance(pointA,pointB)

const medianPoint = MathC.medianPoint

const distanceO = MathC.distanceFromOrigin(pointA)

const nearest = MathC.nearestPoint(pointA,pointB,pointC,pointD,pointE,pointF)

console.log(distance);
console.log(medianPoint);





const distancefromB = pointA.distanceFrom(pointB)
const distancefromOrigin = pointA.distanceFromOrigin()
const medianFromB = pointA.medianPointFromPoint(pointB)
const nearestToA = pointA.nearestPoint(pointB, pointC, pointD, pointE)