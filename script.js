<script src="script.js"></script>

class creature{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    eat(){
        console.log("Eat")
    }
 
    die(){
        console.log("aaaaaaaaa")
    }
    chooseCell(){
        console.log("Random Cell")
    }
    mult(){
        console.log("Mult")
    
    }
}

class GrassEater extends creature{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    eat(){
        console.log("Eat")
    }
    mult(){
        console.log("Mult")
    
    }
    die(){
        console.log("Die")
    }
    chooseCell(){
        console.log("Random Cell")
    }
    
}
class Predator extends creature{
   constructor(x,y, energy){
       super(x,y)
       this.energy = energy
   }
}


let sheep = new Predator()
