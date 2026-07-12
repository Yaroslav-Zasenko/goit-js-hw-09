let formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");

form.addEventListener('input', (event) => {
 
    formData[event.target.name] = event.target.value.trim()
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (savedData) {
    formData = savedData;
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        form.reset();
    }
    
});