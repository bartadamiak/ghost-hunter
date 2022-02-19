const startButton = document.querySelector(".start-button");
const board = document.querySelector(".board");




class Game {
    constructor(level, button, board, time, goal) {
        this.level = level;
        this.board = board;
        this.button = button;
        this.time = time;
        this.goal = goal;

    }

    createBoard() {

        this.button.classList.add("hide")

        for (let i = 0; i < this.level * 3; i++) {
            const newHole = document.createElement("div");
            newHole.classList.add("hole");
            this.board.append(newHole);
        };
        const timer = document.querySelector(".timer");
        const score = document.querySelector(".score");
        const goal = document.querySelector(".goal");
        const level = document.querySelector(".level");
        let holes = document.querySelectorAll(".hole");
        let result = 0;
        let counter = this.time;
        let goalContent = this.goal;
        let levelContent = this.level;
        



        let showTheHole = setInterval(function () {

          
            
            let activeYellow = document.querySelectorAll(".yellow");
            activeYellow.forEach(element => {
                element.classList.toggle("yellow")
            });
            let hole = holes[Math.floor(Math.random() * holes.length)];
            hole.classList.toggle("yellow")

        }, 700)



        holes.forEach(element => {
            element.addEventListener("click", function () {
                if (element.classList.contains("yellow")) {
                    result += 1;
                    score.innerHTML = result;
                    element.classList.toggle("yellow")
              

                }
            })
        });

        let time = setInterval(function () {
            counter--;
            timer.innerHTML = counter;
            goal.innerHTML = goalContent;
            level.innerHTML = levelContent;

            if (counter == 0) {
                clearInterval(time)
                clearInterval(showTheHole)


                if (document.querySelector(".yellow") == true) {
                    document.querySelector(".yellow").classList.toggle("yellow");
                }


            }



        }, 1000);


    };

    checkScore() {
        let score = document.querySelector(".score").innerHTML;
        let goal = document.querySelector(".goal").innerHTML;
        let board = this.board;
        let button = this.button;
        score = parseInt(score)
        goal = parseInt(goal)

        button.classList.remove("hide")
        board.innerHTML = "";

        if (score >= goal) {
            button.innerHTML = "Next level"
            return true
        }
        else {
            button.innerHTML = "Try again"
            return false
        }

    }

}




let level1 = new Game(1, startButton, board, 10, 5);
let level2 = new Game(2, startButton, board, 10, 7);
let level3 = new Game(3, startButton, board, 10, 9);
let level4 = new Game(4, startButton, board, 10, 11);
let level5 = new Game(5, startButton, board, 10, 13);
let level6 = new Game(6, startButton, board, 13, 16);
let level7 = new Game(7, startButton, board, 16, 19);
let level8 = new Game(8, startButton, board, 19, 22);

let levels = [level1, level2, level3, level4, level5, level6, level7, level8];

function letsStart(level) {

  

    level.createBoard();
    console.log(levels)
    setTimeout(function () {
        level.checkScore();
        if (level.checkScore() == true) {   
            levels.shift();
        }
        // if (level.checkScore() == false) {
        //     console.log("przegrałeś")
        // }


    }, (level.time * 1000) + 1000)




    return levels
}

// function letsStart(button, level) {

//     console.log()

//     button.addEventListener("click", function () {
//         level.createBoard();
//         console.log(levels)
//         setTimeout(function () {
//             level.checkScore();
//             if (level.checkScore() == true) {
//                 console.log("wygrałeś")
//                 levels.shift();
//                 console.log(levels)
//             }
//             if (level.checkScore() == false) {
//                 console.log("przegrałeś")
//             }


//         }, (level.time * 1000) + 1000)


//     })

//     return levels
// }


startButton.addEventListener("click", function () {
    letsStart(levels[0])
})

// letsStart(startButton, levels[0])






