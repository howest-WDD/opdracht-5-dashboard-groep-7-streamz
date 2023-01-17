import data from '../json/users.json';
let count = 1;

const showGebruikers = function () {
    let tableHtml='';
    for(const dataUsers of data.users){
      const lastName = dataUsers.lastName;
      const firstName = dataUsers.firstName;
      const img = dataUsers.image;
      const email = dataUsers.email;
      const type = dataUsers.type;
      const gebdat = dataUsers.dateOfBirth;
      const geslacht = dataUsers.gender;

      const gebdatSlice = gebdat.slice(0,10);

      tableHtml+=`
      <tr class="js-table__body--row">
          <td>
            <label class="c-contain">
            <input type="checkbox" />
            <div class="c-input"></div>
          </label>
        </td>
        <td>`+count+`</td>
        <td><img src="`+img+`" alt="`+firstName+` `+lastName+`"></td>
        <td class="js-table__body--name">`+firstName+` `+lastName+`</td>
        <td>`+email+`</td>
        <td>`+type+`</td>
        <td>`+gebdatSlice+`</td>
        <td>`+geslacht+`</td>
        <td>
          <div class="c-table__icons">
            <svg class="c-table__icons--1" onclick="deleteRow(`+count+`)" id="prullenbak" xmlns="http://www.w3.org/2000/svg" width="21.148" height="27.19" viewBox="0 0 21.148 27.19">
            <path id="prullenbak-2" data-name="prullenbak" d="M6.511,27.169A3.03,3.03,0,0,0,9.532,30.19H21.616a3.03,3.03,0,0,0,3.021-3.021V9.042H6.511ZM26.148,4.511H20.861L19.35,3H11.8L10.287,4.511H5V7.532H26.148Z" transform="translate(-5 -3)" fill="#eee"/>
            </svg>
            <svg class="c-table__icons--2" id="editor" xmlns="http://www.w3.org/2000/svg" width="27.19" height="27.19" viewBox="0 0 27.19 27.19">
            <path id="editor-2" data-name="editor" d="M3,24.524v5.664H8.664l16.7-16.7L19.7,7.819ZM29.749,9.1a1.5,1.5,0,0,0,0-2.13L26.214,3.439a1.5,1.5,0,0,0-2.13,0L21.321,6.2l5.664,5.664L29.749,9.1Z" transform="translate(-3 -2.998)" fill="#eee"/>
            </svg>
          </div>
        </td>
      </tr>
      `;
      count++;
    }

    document.querySelector('.js-table__body').innerHTML = tableHtml;

};


const init = function () {   
  if(".js-page-table  "){
      console.log("aaaaa");
      showGebruikers();
    }
};

document.addEventListener("DOMContentLoaded", init);

