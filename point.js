class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceFrom(point) {
        const xDifPoint = point.x - this.x
        const xDifPoint2 = xDifPoint * xDifPoint

        const yDifPoint = point.y - this.y
        const yDifPoint2 = yDifPoint * yDifPoint

        const sumDifPoint2 = xDifPoint2 + yDifPoint2
        const sqrtSumDifPoint2 = Math.sqrt(sumDifPoint2)

        return sqrtSumDifPoint2

    }

    distanceFromOriginP() {
        const originPoint = new Point(0, 0)
        const distanceOP = this.distanceFrom(originPoint) //MathC.calculateDistance(originPoint, this) 
        return distanceOP
    }

    medianPointFromPoint(point) {
        const xofMP = (this.x + point.x) / 2
        const yofMP = (this.y + point.y) / 2
        return "The coords of the median point are X: " + xofMP + " Y: " + yofMP;
    }

    nearestPoint(...points) {
        return points.reduce((p, c) => this.distanceFrom(p) < this.distanceFrom(c) ? p : c) //MathC.calculateDistance(this, p) < MathC.calculateDistance(this, c) ? p : c)
    }

    calculatePerimeter(...points) {
        return points.reduce((p, c) => ((this.distanceFrom(p) + this.distanceFrom(c)) * 2)) //not taking enough nums
    }

    calculateArea(...points) {
        return points.reduce((p, c) => this.distanceFrom(p) * this.distanceFrom(c))
    }

    medianPointFromSegment(segment) {

    }



    // calculateArea(p2, p4) {
    //     return this.distanceFrom(p2) * this.distanceFrom(p4)
    // }
}

class Segment {
    constructor(point1, point2) {
        this.point1 = point1
        this.point2 = point2
    }

    length(segment) {
        return
    }

    median(segment) {
        return
    }
}

class Rectangle {
    constructor(topLeft, topRight, bottomRight, bottomLeft) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomRight = bottomRight;
        this.bottomLeft = bottomLeft;
    }

    perimeter() {
        return (this.topLeft.distanceFrom(this.topRight) +
            this.topRight.distanceFrom(this.bottomRight) +
            this.bottomRight.distanceFrom(this.bottomLeft) +
            this.bottomLeft.distanceFrom(this.topLeft)).toFixed()
    }

    area() {
        return this.bottomLeft.distanceFrom(this.bottomRight) * this.bottomLeft.distanceFrom(this.topLeft).toFixed()
    }

}

class Triangle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    perimeter() {
        return this.point1.distanceFrom(this.point2) +
            this.point2.distanceFrom(this.point3) +
            this.point3.distanceFrom(this.point1);
    }

    area() {
        const pd2 = this.perimeter / 2;
        const pd2MinusFirstSide = pd2 - this.point1.distanceFrom(this.point2);
        const pd2MinusSecondSide = pd2 - this.point2.distanceFrom(this.point3);
        const pd2MinusThirdSide = pd2 - this.point3.distanceFrom(this.point1);
        return Math.sqrt(pd2 * pd2MinusFirstSide * pd2MinusSecondSide * pd2MinusThirdSide)
    }
}

class Rectangle2 {
    constructor(startingpoint, w, h) {
        this.startingpoint = startingpoint;
        this.w = w;
        this.h = h;
    }

    perimeter() {
        //return (this.w + this.h) * 2
        return (this.w * 2) + (this.h * 2)
    }

    area() {
        return this.w * this.h
    }

    point2() {
        let xOfPoint2 = this.startingpoint.x + this.w
        let yOfPoint2 = this.startingpoint.y
        const point2 = new Point(xOfPoint2, yOfPoint2);
        return point2
    }

    point3() {
        let xOfPoint3 = this.point2().x
        let yOfPoint3 = this.point2().y + this.h
        const point3 = new Point(xOfPoint3, yOfPoint3);
        return point3
    }

    point4() {
        let xOfPoint4 = this.startingpoint.x
        let yOfPoint4 = this.startingpoint.y + this.h
        const point4 = new Point(xOfPoint4, yOfPoint4);
        return point4
    }
}

class Rectangle3 {
    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }

    pointTopRight() {
        let xOfPointTR = this.bottomRight.x
        let yOfPointTR = this.topLeft.y
        const tr = new Point(xOfPointTR, yOfPointTR);
        return tr
    }

    pointBottomLeft() {
        let xOfPointBL = this.topLeft.x
        let yOfPointBL = this.bottomRight.y
        const bl = new Point(xOfPointBL, yOfPointBL);
        return bl;

    }
    perimeter() {
        return (this.topLeft.distanceFrom(this.pointTopRight()) +
            this.pointTopRight().distanceFrom(this.bottomRight) +
            this.bottomRight.distanceFrom(this.pointBottomLeft()) +
            this.pointBottomLeft().distanceFrom(this.topLeft))
    }

    area() {
        return this.pointBottomLeft().distanceFrom(this.bottomRight) * this.pointBottomLeft().distanceFrom(this.topLeft)
    }
}