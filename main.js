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

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length); //with getter no need to add () after function, cuz it's NOT a func

const quad1 = new Square(pointsqB, 6);
const quad2 = new Quad(pointsqB, 6);

console.log("con classe", quad1)
console.log("con prototipo", quad2);

const trin1 = new Triangle(pointsqB, pointsqA, pointsqC);
const trin2 = new Triang(pointsqB, pointsqA, pointsqC);
console.log("con classe", trin1)
console.log("con prototipo", trin2);


const recttring1 = new RightTriangle(pointsqB, pointsqA, pointsqC);
const recttring2 = new RightTriang(pointsqB, pointsqA, pointsqC);
console.log("con classe", recttring1)
console.log("con prototipo", recttring2);
console.log(trin1.perimeter());
console.log(recttring1.perimeter());
console.log(trin2.perimeter());
console.log(recttring2.perimeter());
console.log(trin1.area());
console.log(trin2.area());

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false

//console.log(recttring1.calculatehHp()); //huh not workin
console.log(recttring2.calculatehHp());

// for (let i = 0; i < 100; i++) {
//     console.log(i);                   //no need for an array
// }

const range = new Range(0,20,2)
for (const number of range) {
    console.log(number);
}


