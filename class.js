
// /////////////////////////////////// /////////////////////////////////// /////////////////////////////////// /////////////////////////////////// /////////////////////////////////// /////////////////////////////////

class badGrass {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0
        this.directions = [
       
        ];
    }

    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char,char1,char2,char3) {
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
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char3) {
                    found.push(this.directions[i])
                }
            }
        }

        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(1)
        var newCell = random(emptyCells)

        if (newCell && this.multiply >= 35) {

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 5
            var bad = new badGrass(newX, newY)
            badGrassArr.push(bad)


            this.multiply = 0
        }


    }


    eat() {
        this.multiply++

        var emptyCells = this.chooseCell(1) 
        var newCell = random(emptyCells)

        if (newCell  && this.multiply >= 5) {
            this.energy++

            var newX = newCell[0]
            var newY = newCell[1]
            
            this.x = newX
            this.y = newY

            for(var i in grassArr){
                if (newX == grassArr[i].x  && newY == grassArr[i].y ) {
                            grassArr.splice(i, 1)
                     this.mul()
                               break
                }
            }

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 5

            console.log(grassArr.length);
            
            this.multiply = 0


        }
    }
    









}
