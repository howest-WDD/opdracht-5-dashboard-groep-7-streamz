const formValid = function () {
  const form = document.querySelector('.js-validate'); 
  const submit = document.querySelector('.js-submit'); 
  if(document.querySelector(".js-date")){
    const datePickerId = document.querySelector('.js-date');
    const currentDate = new Date().toISOString().split("T")[0];
    const currentYear = new Date().getFullYear().toString();

    datePickerId.max = currentDate;
    datePickerId.min = (currentYear-200)+"-01-01";
  }
 
    submit.addEventListener('click', function (e) { 
        if (!form.checkValidity()) { 
            e.preventDefault(); 
            e.stopPropagation(); 
        } 
 
        form.classList.add('was-validated'); 
    }); 
}


const init = function () {

    if (document.querySelector(".js-form")) {
        formValid();
    }
  };
  
document.addEventListener("DOMContentLoaded", init);