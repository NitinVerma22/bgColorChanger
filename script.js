const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'red') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'orange') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;

    // }

body.style.backgroundColor = e.target.style.backgroundColor;
  });

});
let c = 1;


// Random color generating function

const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

// function for creating random colors

function rndcolor() {
  const buttons = document.querySelectorAll('button');
 buttons.forEach(function (button) {
   for (let i = 0; i <= 4; i++) {
     buttons[i].style.backgroundColor = randomRgbColor();
     c++;
     // console.log(c);
     if (c == 500){
       clearInterval(interval);
       interval=null;
       c = 0;
       console.log(c);
     } 
   }
   for (let i = 6; i <= 9; i++) {
     buttons[i].style.backgroundColor = randomRgbColor();
     c++;
     // console.log(c);
     if (c == 500){
       clearInterval(interval);
       interval=null;
       c = 0;
       console.log(c);
     } 
   }
 });
}




let interval;
interval = setInterval(rndcolor, 90)
document.querySelector('#change').addEventListener('click',function(){
  interval = setInterval(rndcolor, 90)
  setInterval(interval);
 
 
})
document.querySelector('#reset').addEventListener('click',function(){
  
 
 
})


// Setting random color to buttons



// Stopping setting random color

