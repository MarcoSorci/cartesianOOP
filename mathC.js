class MathC {
    static calculateDistance(a, b) {
        const xDif = b.x - a.x
        const xDif2 = xDif * xDif

        const yDif = b.y - a.y
        const yDif2 = yDif * yDif

        const sumDif2 = xDif2 + yDif2
        const sqrtSumDif2 = Math.sqrt(sumDif2)

        return sqrtSumDif2

        // return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)) //in one line
    }
}