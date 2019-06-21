const transguittariste=document.querySelector('.guittariste')
const transchanteuse=document.querySelector(".chanteuse")
const transcandidature=document.querySelector(".candidature")
const transgroupe=document.querySelector(".grp")
const tanspageimage = document.querySelector(".pageImage")
const tanspageimage2 = document.querySelector(".pageImage2")
const tanspageimage3 = document.querySelector(".pageImage3")
const tanspageimage4 = document.querySelector(".pageImage4")
const musicbelieve=document.querySelector('.believe')
const musicplay1=document.querySelector('.play1')
const nom1=document.querySelector('.titre1')
const musicnoway=document.querySelector('.no-way')
const musicplay2=document.querySelector('.play2')
const nom2=document.querySelector('.titre2')
const musicpray=document.querySelector('.pray')
const musicplay3=document.querySelector('.play3')
const nom3=document.querySelector('.titre3')
const musicrunaway=document.querySelector('.run-away')
const musicplay4=document.querySelector('.play4')
const nom4=document.querySelector('.titre4')
const dispnom4=document.querySelector('.titre4 p')
const dispnom3=document.querySelector('.titre3 p')
const dispnom2=document.querySelector('.titre2 p')
const dispnom1=document.querySelector('.titre1 p')

let yPos = window.pageYOffset


// if (window.matchMedia("(min-width: 600px)").matches){
transguittariste.addEventListener('mouseover',transitionguit)
transchanteuse.addEventListener('mouseover',transitionchant)
transcandidature.addEventListener('mouseover',transitioncand)
transgroupe.addEventListener('mouseover',transitiongroup)
musicbelieve.addEventListener('mouseover',believechange)
musicbelieve.addEventListener('mouseout',believereset)
musicnoway.addEventListener('mouseover',nowaychange)
musicnoway.addEventListener('mouseout',nowayreset)
musicpray.addEventListener('mouseover',praychange)
musicpray.addEventListener('mouseout',prayreset)
musicrunaway.addEventListener('mouseover',runawaychange)
musicrunaway.addEventListener('mouseout',runawayreset)
console.log('sa')

  //
  // if (yPos > 20){
  //   console.log('aa')
  //   transchanteuse.style.marginLeft='37.6%'
  //   transgroupe.style.marginLeft='37.6%'
  //   transcandidature.style.marginLeft='37.6%'
  //   tanspageimage2.style.left='15000px'
  //   tanspageimage2.style.transition ='left 1s'
  //   tanspageimage4.style.left='15000px'
  //   tanspageimage4.style.transition ='left 1s'
  //   tanspageimage3.style.left='15000px'
  //   tanspageimage3.style.transition ='left 1s'
  //   tanspageimage.style.left='33%'
  //   tanspageimage.style.display='block'
  //   tanspageimage.style.transition ='left 1s'
  // }

function transitionguit() {
    this.style.marginLeft='4%'
    this.style.transition ='margin-left 2s'
    transchanteuse.style.marginLeft='37.6%'
    transgroupe.style.marginLeft='37.6%'
    transcandidature.style.marginLeft='37.6%'
    tanspageimage2.style.left='15000px'
    tanspageimage2.style.transition ='left 1s'
    tanspageimage4.style.left='15000px'
    tanspageimage4.style.transition ='left 1s'
    tanspageimage3.style.left='15000px'
    tanspageimage3.style.transition ='left 1s'
    tanspageimage.style.left='33%'
    tanspageimage.style.display='block'
    tanspageimage.style.transition ='left 1s'
 }

function transitionchant() {
    this.style.marginLeft='4%'
    this.style.transition ='margin-left 2s'
    transguittariste.style.marginLeft='37.6%'
    transcandidature.style.marginLeft='37.6%'
    transgroupe.style.marginLeft='37.6%'
    tanspageimage.style.left='15000px'
    tanspageimage.style.transition ='left 1s'
    tanspageimage3.style.left='15000px'
    tanspageimage3.style.transition ='left 1s'
    tanspageimage4.style.left='15000px'
    tanspageimage4.style.transition ='left 1s'
    tanspageimage2.style.left='33%'
    tanspageimage2.style.display='block'
    tanspageimage2.style.transition ='left 1s'

}
function transitioncand() {
    this.style.marginLeft='4%'
    this.style.transition ='margin-left 2s'
    transchanteuse.style.marginLeft='37.6%'
    transguittariste.style.marginLeft='37.6%'
    transgroupe.style.marginLeft='37.6%'
    tanspageimage.style.left='15000px'
    tanspageimage.style.transition ='left 1s'
    tanspageimage2.style.left='15000px'
    tanspageimage2.style.transition ='left 1s'
    tanspageimage4.style.left='15000px'
    tanspageimage4.style.transition ='left 1s'
    tanspageimage3.style.left='33%'
    tanspageimage3.style.display='block'
    tanspageimage3.style.transition ='left 1s'
}
function transitiongroup() {
  this.style.marginLeft='4%'
  this.style.transition ='margin-left 2s'
  transguittariste.style.marginLeft='37.6%'
  transchanteuse.style.marginLeft='37.6%'
  transcandidature.style.marginLeft='37.6%'
  tanspageimage.style.left='15000px'
  tanspageimage.style.transition ='left 1s'
  tanspageimage2.style.left='15000px'
  tanspageimage2.style.transition ='left 1s'
  tanspageimage3.style.left='15000px'
  tanspageimage3.style.transition ='left 1s'
  tanspageimage4.style.left='33%'
  tanspageimage4.style.display='block'
  tanspageimage4.style.transition ='left 1s'
}
function believechange() {

  this.style.color='#79adca'
    this.style.background= 'linear-gradient(to top, rgba(255,255,255,0) 10%, #79adca 100%)'
  musicplay1.style.top='21.9vh'
  musicplay1.style.transition ='top 2s'
  this.style.transitionProperty ='background'
  this.style.transitionDuration ='2s'
  dispnom1.style.transitionProperty ='font-Size'
  dispnom1.style.transitionDuration ='2s'
  dispnom1.style.fontSize ='0vw'

  nom1.style.top=''
  nom1.style.transition =' 1s'
}
function believereset() {
  this.style.background=''
  musicplay1.style.top=''
  nom1.style.top=''
    dispnom1.style.fontSize ='2vw'
    }
function nowaychange() {

  this.style.color='#79adca'
    this.style.background= 'linear-gradient(to top, rgba(255,255,255,0) 10%, #79adca 100%)'
  musicplay2.style.top='21.9vh'
  musicplay2.style.transition ='top 2s'
  this.style.transitionProperty ='background'
  this.style.transitionDuration ='2s'
  dispnom2.style.transitionProperty ='font-Size'
  dispnom2.style.transitionDuration ='2s'
  dispnom2.style.fontSize ='0vw'

  nom2.style.top=''
  nom2.style.transition =' 1s'
}
function nowayreset() {
  this.style.background=''
  musicplay2.style.top=''
  nom2.style.top=''
    dispnom2.style.fontSize ='2vw'
    }
function praychange() {

  this.style.color='#79adca'
    this.style.background= 'linear-gradient(to top, rgba(100,255,255,0) 10%, rgba(100,255,255,1) 50%,rgba(255,255,255,0) 100%)'
  musicplay3.style.top='21.9vh'
  musicplay3.style.transition ='top 2s'
  this.style.transitionProperty ='background'
  this.style.transitionDuration ='2s'
  dispnom3.style.transitionProperty ='font-Size'
  dispnom3.style.transitionDuration ='2s'
  dispnom3.style.fontSize ='0vw'

  nom4.style.top=''
  nom4.style.transition =' 1s'
  }
function prayreset() {
  this.style.background=''
  musicplay3.style.top=''
  nom3.style.top=''
    dispnom3.style.fontSize ='2vw'
    }
function runawaychange() {
  this.style.color='#79adca'
  	this.style.background= 'linear-gradient(to top, rgba(255,255,255,0) 10%, #79adca 100%)'
  musicplay4.style.top='21.9vh'
  musicplay4.style.transition ='top 2s'
  this.style.transitionProperty ='background'
  this.style.transitionDuration ='2s'
  dispnom4.style.transitionProperty ='font-Size'
  dispnom4.style.transitionDuration ='2s'
  dispnom4.style.fontSize ='0vw'

  nom4.style.top=''
  nom4.style.transition =' 1s'
}
function runawayreset() {
  this.style.background=''
  musicplay4.style.top=''
  nom4.style.top=''
    dispnom4.style.fontSize ='2vw'

}

// Media
