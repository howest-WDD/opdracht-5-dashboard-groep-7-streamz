import data from '../json/users.json';
let json = data;

const showUserDetail = function(info, userId){

    for(const dataUsers of info.users){

        if(dataUsers.id==userId){
        const lastName = dataUsers.lastName;
        const firstName = dataUsers.firstName;
        const img = dataUsers.image;
        const email = dataUsers.email;
        const type = dataUsers.type;
        const gebdat = dataUsers.dateOfBirth.split("T")[0];
        const geslacht = dataUsers.gender;
      let geslachtChecked='';
      let abbonChecked='';
    

      if(geslacht=="Man"){
        geslachtChecked = `<input type="radio" class="btn-check c-form__radio" name="options1" id="man" checked>
        <label class="btn c-form__radio" for="man">Man</label>
        
        <input type="radio" class="btn-check c-form__radio" name="options1" id="vrouw">
        <label class="btn c-form__radio" for="vrouw">Vrouw</label>

        <input type="radio" class="btn-check c-form__radio" name="options1" id="x">
        <label class="btn c-form__radio" for="x">X</label>`
      }else if(geslacht=="Vrouw"){
        geslachtChecked = `<input type="radio" class="btn-check c-form__radio" name="options1" id="man">
        <label class="btn c-form__radio" for="man">Man</label>
        
        <input type="radio" class="btn-check c-form__radio" name="options1" id="vrouw" checked>
        <label class="btn c-form__radio" for="vrouw">Vrouw</label>

        <input type="radio" class="btn-check c-form__radio" name="options1" id="x">
        <label class="btn c-form__radio" for="x">X</label>`
      }
      else{
        geslachtChecked = `<input type="radio" class="btn-check c-form__radio" name="options1" id="man">
        <label class="btn c-form__radio" for="man">Man</label>
        
        <input type="radio" class="btn-check c-form__radio" name="options1" id="vrouw">
        <label class="btn c-form__radio" for="vrouw">Vrouw</label>

        <input type="radio" class="btn-check c-form__radio" name="options1" id="x" checked>
        <label class="btn c-form__radio" for="x">X</label>`
      }

      if(type=="Gratis"){
        abbonChecked = `<input type="radio" class="btn-check c-form__radio" name="options2" id="gratis" checked>
        <label class="btn c-form__radio" for="gratis">Gratis</label>

        <input type="radio" class="btn-check c-form__radio" name="options2" id="streamz">
        <label class="btn c-form__radio" for="streamz">Streamz</label>

        <input type="radio" class="btn-check c-form__radio" name="options2" id="streamz+">
        <label class="btn c-form__radio" for="streamz+">Streamz +</label>`
      }else if(type=="Streamz"){
        abbonChecked = `<input type="radio" class="btn-check c-form__radio" name="options2" id="gratis" >
        <label class="btn c-form__radio" for="gratis">Gratis</label>

        <input type="radio" class="btn-check c-form__radio" name="options2" id="streamz" checked>
        <label class="btn c-form__radio" for="streamz">Streamz</label>

        <input type="radio" class="btn-check c-form__radio" name="options2" id="streamz+">
        <label class="btn c-form__radio" for="streamz+">Streamz +</label>`
      }
      else{
        abbonChecked = `<input type="radio" class="btn-check c-form__radio" name="options2" id="gratis" checked>
        <label class="btn c-form__radio" for="gratis">Gratis</label>

        <input type="radio" class="btn-check c-form__radio" name="options2" id="streamz">
        <label class="btn c-form__radio" for="streamz">Streamz</label>

        <input type="radio" class="btn-check c-form__radio" name="options2" id="streamz+" checked>
        <label class="btn c-form__radio" for="streamz+">Streamz +</label>`
      }
      
    
    
    let formHtml='';
      formHtml+=`

      <div class="c-content__form">
    <div class="row">
      <div class="order-2 col-xl-8 col-12">
        <div class="row">
          <div class="mb-3 col-lg-6 col-md-12">
            <label class="c-form__label" for="floatingFirstName">Voornaam</label>
            <input type="text" class="form-control c-form__input" id="floatingFirstName" value="`+firstName+`" minlength="2" required>
            <div class="valid-feedback">Ziet er good uit</div>
            <div class="invalid-feedback">Gelieve een naam in te geven</div>
        </div>
        <div class="mb-3 col-lg-6 col-md-12">
          <label class="c-form__label" for="floatingLastName">Achternaam</label>
          <input type="text" class="form-control c-form__input" id="floatingLastName" value="`+lastName+`" minlength="2" required>
          <div class="valid-feedback">Ziet er good uit</div>
          <div class="invalid-feedback">Gelieve een naam in te geven</div>
        </div>
        </div>
        <div class="row">
        <div class="mb-3 col-lg-6 col-md-12">
      <div class="mb-3">
        <label class="c-form__label" for="floatingEmail">Email</label>
          <input type="email" class="form-control c-form__input" id="floatingEmail" value="`+email+`" required>
          <div class="valid-feedback">Ziet er good uit</div>
          <div class="invalid-feedback">Gelieve een correct email address in te geven</div>
      </div>
    </div>
    <div class="mb-3 col-lg-6 col-md-12">
      <div class="mb-3">
        <label class="c-form__label" for="floatingGebdat">Geboortedatum</label>
        <input type="date" class="form-control c-form__input js-date" id="floatingGebdat" value="`+gebdat+`" required>
        <div class="valid-feedback">Ziet er good uit</div>
        <div class="invalid-feedback">Gelieve een datum in te geven</div>
      </div>
      </div>
        </div>
      <div class="c-form__btn">
        <button class="c-btn js-submit c-btn--blue m-1">Aanpassen</button>
        </div>
      </div>

      <div class="order-1 col-xl-4 col-12">
        <div class="mb-3 p-0 ">
          <p class="c-form__label">Geslacht</p>
          `+geslachtChecked+`
          
        </div>   
        <div class="mb-3 p-0">
            <p class="c-form__label">Type abonnement</p>
            `+abbonChecked+`
        </div> 
         <div class="mb-3 p-0">
            <p class="c-form__label">Avatar</p>
            <input type="file" name="image" id="image" accept="image/*" />
            <div class="c-form__preview">
              <div class="c-form__preview c-form__preview--avatar" id="js-avatar"></div>
              <button type="button" class="c-form__preview c-form__preview--btn " id="upload-button" aria-labelledby="image" aria-describedby="image" >
                <svg xmlns="http://www.w3.org/2000/svg" width="90.554" height="84.939" viewBox="0 0 90.554 84.939">
                  <path id="add-image" d="M96.554,14.911v8.941h-14.3V37.264H72.724V23.852h-14.3V14.911h14.3V1.5h9.532V14.911ZM56.043,46.2a6.941,6.941,0,0,0,7.149-6.712,7.167,7.167,0,0,0-14.3.006A6.942,6.942,0,0,0,56.043,46.2ZM72.724,60.662l-2.447-2.548a9.96,9.96,0,0,0-14.184,0l-3.123,3.263L29.83,37.264l-14.3,14.9V23.852H48.894V14.911H15.532c-5.264,0-9.532,4-9.532,8.941V77.5c0,4.938,4.268,8.941,9.532,8.941H72.724c5.264,0,9.532-4,9.532-8.941V46.2H72.724Z" fill="#a6a9b7"/>
                </svg>
              </button>
            </div>
        </div> 
      </div>
    </div>
  </div>`;


    document.querySelector('.js-detail').innerHTML = formHtml;

    const UPLOAD_BUTTON = document.getElementById("upload-button");
    const AVATAR = document.getElementById("js-avatar");

    AVATAR.style.background = `url(${img}) center center/cover`;
    UPLOAD_BUTTON.classList.add("c-form__preview--hide");
     
    
}
}
  }


function userDetail(){
    const urlParams = new URLSearchParams(window.location.search); 
    const userId = urlParams.get('id'); 
    if(userId){
      showUserDetail(json, userId);
    }
  }
  

  const init = function () {
    if(".js-detail"){
        userDetail();
    }
    
};

  document.addEventListener("DOMContentLoaded", init);