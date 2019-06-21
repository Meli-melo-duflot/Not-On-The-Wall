const classlien1 = document.querySelector('.classlien')
const liensite1 = document.querySelector('#liensite')

classlien1.addEventListener('mouseover',colorlien)
classlien1.addEventListener('mouseout',resetlien)
function colorlien() {
  this.style.background='#47032C'
  liensite1.style.color='#FFD700'
  this.style.transitionProperty ='color'
  this.style.transitionDuration ='2s'

}


function resetlien () {
  this.style.background=''
  liensite1.style.color=''
  this.style.transitionProperty ='color'
  this.style.transitionDuration ='2s'

}
