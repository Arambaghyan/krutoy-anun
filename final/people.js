class X {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
}

class People extends X {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 4;
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


    getNewCordinates(){
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

    chooseCell(character) {
        this.getNewCordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    mul() {
        let greyCells = this.chooseCell(0);
        let greenCells = this.chooseCell(1)
        let yellowCells = this.chooseCell(2);
        let redCells = this.chooseCell(3)
        let emptyCells = [...greyCells, ...yellowCells, ...greenCells, ...redCells]

        let newCell = random(emptyCells);

        if (newCell && this.energy >= 5) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            for (var i in eaterArr) {
                if (newX == eaterArr[i].x && newY == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
                    break;
                }
            }

            let newPeople = new People(newX, newY, 4);
            peopleArr.push(newPeople);
            this.multiply = 0;
        }
    }


    eat() {
        let yellowCells = this.chooseCell(2);
        let greenCells = this.chooseCell(1)
        let redCells = this.chooseCell(3);
        let emptyCells = [...greenCells, ...yellowCells, ...redCells]
        let newCell = random(emptyCells);

        if (newCell) {
            if (this.energy <= 10) {
                this.energy++;
            }
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in eaterArr) {
                if (newX == eaterArr[i].x && newY == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move()
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in peopleArr) {
                if (this.x == peopleArr[i].x && this.y == peopleArr[i].y) {
                    peopleArr.splice(i, 1);
                    break;
                }
            }

        }
    }

    move() {
        let greyCells = this.chooseCell(0);
        let greenCells = this.chooseCell(1)
        let yellowCells = this.chooseCell(2);
        let redCells = this.chooseCell(3);
        let emptyCells = [...greyCells, ...greenCells, ...yellowCells, ...redCells]
        let newCell = random(emptyCells);
        this.energy--;
        if (newCell && this.energy >= 0) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
        }
    }
}


