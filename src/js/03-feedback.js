import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form')
const output = document.querySelector('lable')
function setItem (event) {
    event.preventDefault()
    const { email, message } = event.currentTarget;
    const data = { email: email.value, message: message.value}
    localStorage.setItem( "feedback-form-state", JSON.stringify(data))
}
feedbackForm.addEventListener('input', throttle( setItem, 500))

function updateInput() {
  output.textContent = localStorage.getItem("feedback-form-state") || ""
}
 updateInput()

function submitForm(event) {
     event.preventDefault()
    const { email, message } = event.currentTarget;
    const data = { email: email.value, message: message.value }
    console.log(data)
    localStorage.removeItem("feedback-form-state")
    feedbackForm.reset()
}
feedbackForm.addEventListener('submit', submitForm)

