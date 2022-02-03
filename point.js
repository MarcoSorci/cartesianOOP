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

        return "The distance to the given point is: " + sqrtSumDifPoint2

    }

    distanceFromOrigin() {
        const originPoint = new Point(0, 0)
        const distanceOP = MathC.calculateDistance(originPoint, this)
        return "The distance to the origin point is: " + distanceOP
    }

    medianPointFromPoint(point) {
        const xofMP = (this.x + point.x) / 2
        const yofMP = (this.y + point.y) / 2
        return "The coords of the median point are X: " + xofMP + " Y: " + yofMP;
    }

    nearestPoint(...points) {
        return points.reduce((p, c) => MathC.calculateDistance(this, p) < MathC.calculateDistance(this, c) ? p : c)
    }
}