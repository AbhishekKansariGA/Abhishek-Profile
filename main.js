console.log('Hello World!');
const sec = document.querySelector(".sec");
const dark = document.querySelector(".dark");
dark.onclick = function(){
  sec.classList.toggle('light')
}
