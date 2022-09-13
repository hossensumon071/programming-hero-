// option 1: directly set on the html element


// option 2
function makeRed(){
    document.body.style.background='red'
}


// option 3
const makeBlueButton = document.getElementById('make-blue');
      makeBlueButton.onclick = makeBlue;

    function makeBlue(){
        document.body.style.backgroundColor='blue';
    }



const makePurpleButton = document.getElementById('make-purple');
      makePurpleButton.onclick = function makePurple (){
        document.body.style.backgroundColor = 'purple'
    };


// option 4
const pinkButton = document.getElementById('make-pink');
      pinkButton.addEventListener('click', makePink)

      function makePink(){
        document.body.style.background='pink';
      }

// const greenBtn = document.getElementById('make-green');
//       greenBtn.addEventListener('click', function makeGreen(){
//         document.body.style.background='green'
//       });


// important we will use this sometimes 
 document.getElementById('make-green').addEventListener('click', function makeGreen(){
    document.body.style.background='green'
  });
      

     
  
function handleOnClick(){
    const handlerStatus = document.getElementById('hand-status');
          handlerStatus.innerText = 'handled by function attached on click attribute'
    console.log('button clicked');
}

