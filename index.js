const input = document.getElementById('input');

input.addEventListener('click',addingEventListener)

function addingEventListener(event){
  if(event === input){
    alert('I was clicked!');

  }else{
    alert('add event listener');
  }
}
