let userId=0;

const getId = function(){
  const urlParams = new URLSearchParams(window.location.search); 
  userId = urlParams.get('id');
  return userId 
}

const formValid = function () {

  const form = document.querySelector('.js-validate'); 
  const submit = document.querySelector('.js-submit'); 


  if(document.querySelector(".js-date")){
    const datePickerId = document.querySelector('.js-date');
    const currentDate = new Date().toISOString().split("T")[0];
    const currentYear = new Date().getFullYear().toString();

    datePickerId.max = (currentYear-13)+"-01-01";
    datePickerId.min = (currentYear-200)+"-01-01";
  }
 
    submit.addEventListener('click', function (e) { 
        if (!form.checkValidity()) { 
            e.preventDefault(); 
            e.stopPropagation(); 
            console.log("valid");
        }         
        form.classList.add('was-validated'); 
    }); 
}


const init = function () {

    if (document.querySelector(".js-form")) {
      setTimeout(formValid,1);
      getId();
    }
  };
  
document.addEventListener("DOMContentLoaded", init);