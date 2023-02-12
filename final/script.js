



var matrix = [];

var grassArr = [];
var grassEaterArr = [];
var eaterArr = [];
var peopleArr = [];

var side = 18;

function setup() {
    for (let i = 0; i < 40; i++) {
        matrix.push([])
        for (let j = 0; j < 40; j++) {
            let k = random([1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4]);
            matrix[i].push(k);
        }
    }

    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const gr = new Grass(j, i, 1);
                grassArr.push(gr);
            }
            else if (matrix[i][j] === 2) {
                const greater = new GrassEater(j, i, 2);
                grassEaterArr.push(greater);
            }
            else if (matrix[i][j] === 3) {
                const eater = new Eater(j, i, 3);
                eaterArr.push(eater);
            }
            else if (matrix[i][j] === 4) {
                const people = new People(j, i, 4);
                eaterArr.push(people);
            
            }
        }
    }
}
    
    function draw() {

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("green");
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow")
                }
                else if (matrix[y][x] == 3) {
                    fill("red")
                }
                else if(matrix[y][x] == 4){
                    fill("#c300ff")
                }



                rect(x * side, y * side, side, side);


                /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)*/
            }
        }

        for (let i in grassArr) {
            grassArr[i].mul();
        }

        for (let i in grassEaterArr) {
            grassEaterArr[i].mul();
            grassEaterArr[i].eat();
            grassEaterArr[i].die();

        }
        for (let i in eaterArr) {
            eaterArr[i].mul();
            eaterArr[i].eat();
            /*eaterArr[i].die();*/
        }


        for(let i in peopleArr){
            peopleArr[i].mul();
            peopleArr[i].eat();
            peopleArr[i].die();
        }

    }   