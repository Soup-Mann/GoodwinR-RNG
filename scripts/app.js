
//let ret = document.getElementById('return');

let rndmbtn = document.getElementById('rndmbtn');
let insertHere = document.getElementById('insertHere');
let firstLi = document.getElementById('firstLi');
let secondLi = document.getElementById('secondLi');
let thirdLi = document.getElementById('thirdLi');
let fourthLi = document.getElementById('fourthLi');
let fifthLi = document.getElementById('fifthLi');
let num;
let count = 0;
let ret;

function rndm() {
    num = 0 + Math.floor(Math.random() * 27);
    console.log(num);
}


rndmbtn.addEventListener("click", () => {
    getName()
})


let insert;

function getName() {
    fetch('./data/data.json').then(response => response.json()).then(data => {
        rndm()
        ret = data;
        console.log(ret.studentName[num].firstName);
        let insert = ret.studentName[num].firstName;

        insertHere.textContent = insert;
        // listt()
 if (count == 5) {
        count = 1;
    } else
    {
        count++
    }
    console.log(count);

        if (count == 1) {
            firstLi.textContent = insert;
        }
        else if (count == 2) {
            secondLi.textContent = insert;
        }
        else if (count == 3) {
            thirdLi.textContent = insert;
        }
        else if (count == 4) {
            fourthLi.textContent = insert;
        }
        else if (count == 5) {
            fifthLi.textContent = insert;
        }


    })
    
}

// function listt() {
   





// }



    // getName()