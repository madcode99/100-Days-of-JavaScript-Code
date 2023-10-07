const card = document.querySelector('.card')

card.addEventListener('mousemove', rotate)
card.addEventListener('mouseout', stopRotate)

function rotate(e){
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
  
    cardItem.style.transform = 'rotateX('+-(e.offsetY - halfHeight) / 7+'deg) rotateY('+(e.offsetX - halfHeight) / 7+'deg)';
  }
function stopRotate(){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}
