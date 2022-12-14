function matrixGenerator(matrixSize, grassCount,grassEaterCount,predatorCount, environmentalist,badGrass) {

     var matrix = []

     for (let i = 0; i < matrixSize; i++) {
          matrix[i] = []
          for (let j = 0; j < matrixSize; j++) {
               matrix[i][j] = 0

          }
     }


// խոտերի թվերի քանակ մատրիցայում
     for (let i = 0; i < grassCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 1
          }
     }
// խոտակերերի թվերի քանակ մատրիցայում

     for (let i = 0; i < grassEaterCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 2
          }
     }
// գիշատիչի թվերի քանակ մատրիցայում

     for (let i = 0; i < predatorCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 3
          }
     }
     for (let i = 0; i < environmentalist; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 4
          }
     }
     for (let i = 0; i < badGrass; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 5
          }
     }

     return matrix
}

let matrix = matrixGenerator(20, 60, 16, 11, 5, 10)//այստեղ ամեն անգամ վերևում գրված նոր արգումենտին պետք է նոր արժեք տաս

console.log(matrix);

var side = 25

//այստեղ սեղծում ենք մեր բոլոր կերպարների համար նախատեսված զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var environmentalistArr = []
var badGrassArr = []


function setup() {
     createCanvas(matrix[0].length * side, matrix.length * side)
     frameRate(10)
     for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {
               if (matrix[y][x] == 1) {
                    var gr = new Grass(x, y);
                    grassArr.push(gr);
               }
               else if (matrix[y][x] == 2) {

                    var grEat = new GrassEater(x, y);
                    grassEaterArr.push(grEat);
               } else if (matrix[y][x] == 3) {

                    var pre = new Predator(x, y);
                    predatorArr.push(pre);
               }
               else if (matrix[y][x] == 4) {

                    var env = new environmentalist(x, y);
                    environmentalistArr.push(env);
               }
               else if (matrix[y][x] == 5) {

                    var bad = new badGrass(x, y);
                    badGrassArr.push(bad);
               }

          }
     }
}



function draw() {
     for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {

               //չենք մոռանում նկարել բոլոր կերպարներին ըստ թվերի
               if (matrix[y][x] == 1) {
                    fill("green")
               }else  if (matrix[y][x] == 2) {
                    fill("yellow")
               }else  if (matrix[y][x] == 3) {
                    fill("red")
               }
               else  if (matrix[y][x] == 4) {
                    fill("blue")
               }
               else  if (matrix[y][x] == 5) {
                    fill("purple")
               }else {
                    fill("gray")
               }

               rect(x * side, y * side, side, side)
          }
     }


     for( var i in grassArr){
          grassArr[i].mul()
     }

     for(let i in grassEaterArr){
          grassEaterArr[i].mul()
          grassEaterArr[i].eat()
     }

     for(let j in predatorArr){
          predatorArr[j].mul()
          predatorArr[j].eat()
     }
     for(let j in environmentalistArr){
          environmentalistArr[j].eat()
     }
     for(var i in badGrassArr){
          badGrassArr[i].eat()
     }
}