// Code to add an event listener to the submit button for the Get in Touch form.
const formBtn = document.querySelector("button"); // Make sure to change if another button tag is added to about-us.html

formBtn.addEventListener("click", function() {
    formBtn.innerText = "Thanks for submitting the form! We'll try to get in touch as soon as possible."
});