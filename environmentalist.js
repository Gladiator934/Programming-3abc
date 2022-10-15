class environmentalist {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 200
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char,char1) {
        this.getNewCoordinates()
        let found = []

        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
        }

        return found;
    }


    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY
        } else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    eat() {
        var emptyCells = this.chooseCell(5)
        var newCell = random(emptyCells)

        if (newCell) {
            this.energy++

            var newX = newCell[0]
            var newY = newCell[1]
            
            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY


            for(var i in badGrassArr){
                if (newX == badGrassArr[i].x  && newY == badGrassArr[i].y ) {
                    badGrassArr.splice(i, 1)
                               break
                }
            }

        }else{
            this.move()
        }
    }


    die() {
        matrix[this.y][this.x] = 0

        for (var i in environmentalistArr) {
            if (this.x == environmentalistArr[i].x && this.y == environmentalistArr[i].y) {

                environmentalistArr.splice(i, 1)
                break
            }
        }
    }
    
}
