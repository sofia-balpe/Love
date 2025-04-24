const btnYes = document.querySelector(".yesbtn");
const btnNo = document.querySelector(".nobtn");
const body = document.querySelector("#body");
const bodyContainer = document.querySelector("#bodyContainer")
const result = document.querySelector(".result");
const imageCenter = document.querySelector(".imagem");
const hidden1 = document.querySelector(".hidden1");
const hidden2 = document.querySelector(".hidden2");
// const divQuestion = document.querySelector(".imagem");

btnNo.addEventListener("mouseover", () => {

  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  const newX = Math.floor(Math.random() * (maxWidth - btnNo.offsetWidth));
  const newY = Math.floor(Math.random() * (maxHeight - btnNo.offsetWidth));

  btnNo.style.position = "absolute";
  btnNo.style.left = `${newX}px`;
  btnNo.style.top = `${newY}px`;

});


btnYes.addEventListener("click", () => {
  bodyContainer.style.display = "none";
  result.style.visibility = "visible";
  result.style.display = "block"
});


let imagemAtual = 1;
imageCenter.classList.add("fade");
imageCenter.addEventListener("click", ()=>{
  imageCenter.style.opacity = 0;
  setTimeout(()=>{

    if(imagemAtual === 1){
      imageCenter.src = '../images/youAndMe2.jpg';
      imagemAtual = 2;
    }
    else if(imagemAtual === 2){
      imageCenter.src = '../images/youAndMe3.jpg';
      imagemAtual = 3;
    }
    else if( imagemAtual === 3){
      imageCenter.src = '../images/youAndMe.jpg';
      imagemAtual = 1;
    }

    imageCenter.style.opacity = 1;
  }, 300);
  
})

