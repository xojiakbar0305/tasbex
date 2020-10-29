let elDivBox = document.querySelector('.box')//div

let = elSpan = document.querySelector('.span')//span

let elButton = document.querySelector('.button')//button

elDivBox.addEventListener('click', (evt) => {
  evt.preventDefault()
  elSpan.textContent ++
})

elButton.addEventListener('click', () => {
  elSpan.textContent = 0
})