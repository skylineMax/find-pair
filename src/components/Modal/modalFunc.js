import './modal.css';

function modalFunc(arr, time, clicks) {
  let modal = document.getElementById('modal');
  let btn = document.getElementById("close"); 
  modal.style.display = "flex";
  if(time === undefined && clicks === undefined) {
    btn.value = `You lose`;
  } else {
    btn.value = btn.value + `You win with ${time} seconds and ${clicks} clicks`;
  }
  btn.onclick = function() {
    modal.style.display = "none";
    arr.forEach((item, i, arr) => {
     item.setAttribute('data-state', '0');
     item.style.backgroundImage = 'none';
    });  
  }
  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
          arr.forEach((item, i, arr) => {
             item.setAttribute('data-state', '0');
             item.style.backgroundImage = 'none';
          });
      }
  }
  return time;
}
export default modalFunc;