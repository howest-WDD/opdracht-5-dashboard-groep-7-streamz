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
      <tr>
          <td>
            <label class="c-contain">
            <input type="checkbox" />
            <div class="c-input"></div>
          </label>
        </td>
        <td>`+count+`</td>
        <td><img src="`+img+`" alt="`+firstName+` `+lastName+`"></td>
        <td>`+firstName+` `+lastName+`</td>
        <td>`+email+`</td>
        <td>`+type+`</td>
        <td>`+gebdatSlice+`</td>
        <td>`+geslacht+`</td>
        </tr>
        <tr>
      `;
      count++;
    }

    document.querySelector('.js-table__body').innerHTML = tableHtml;

};


const init = function () {   
    showGebruikers();
};

document.addEventListener("DOMContentLoaded", init);
  