import  throttle  from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form')
const inputForm = {}

feedbackForm.addEventListener('input', throttle(setItem, 500))
feedbackForm.addEventListener('submit', submitForm)

function setItem (event) {
  inputForm[event.target.name] = event.target.value

  localStorage.setItem("feedback-form-state", JSON.stringify(inputForm))

}


function updateInput() {
  let output = localStorage.getItem("feedback-form-state") ;
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


