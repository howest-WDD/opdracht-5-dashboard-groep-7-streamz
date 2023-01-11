window.onload=function(){
    const form = document.getElementById("form");
    const output = document.getElementById("output");
    let divs = [];
    let count = 1;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
    
        const div = document.createElement("tr");
        div.className = "c-sbtable__row";
    
        div.innerHTML = `
        <td class="c-sbtable__count">${count}</td>
        <td>${name}</td>
        `;
        divs.push(div);
    
    
        while (output.firstChild) {
            output.removeChild(output.firstChild);
        }
    
    
        divs.forEach((div, index) => {
            output.appendChild(div);
        });
        form.reset();
        count++;
    });
    
    $("#output").sortable({
        update: function (event, ui) {
            $("#output > tr").each(function (index) {
                $(this).find('td:first-of-type').text(`${index + 1}`);
            });
        }
    });
}
