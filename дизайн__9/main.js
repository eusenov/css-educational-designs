function cleanFormsConatents(){
    let inputs = document.querySelectorAll('.thirdScreen-upFormsBoxes input')
    for (let input of inputs){
        input.value = null; 
    }
    let textarea = document.querySelector('#textarea')
    textarea.value = null; 
}
let formButton = document.querySelector('#formButton')
formButton.addEventListener('click', cleanFormsConatents)
