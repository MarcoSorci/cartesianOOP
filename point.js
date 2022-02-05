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

    medianPointFromSegment(segment){
        
    }



    // calculateArea(p2, p4) {
    //     return this.distanceFrom(p2) * this.distanceFrom(p4)
    // }
}