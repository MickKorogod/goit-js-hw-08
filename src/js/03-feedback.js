import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form')


function setItem (event) {
    event.preventDefault()
    const { email, message } = event.currentTarget;
    const data = { email: email.value, message: message.value}
    localStorage.setItem( "feedback-form-state", JSON.stringify(data))
}
feedbackForm.addEventListener('input', throttle( setItem, 500))

function updateInput() {
  let output = localStorage.getItem("feedback-form-state") || "";
  if (output) {
    output = JSON.parse(output);
    Object.entries(output).forEach (([name, value]) => {
      feedbackForm.elements[name].value = value
    })
  }
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

