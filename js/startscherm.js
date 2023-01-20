window.onload = function () {
    var form = document.getElementById("sbform");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var newRowName = document.getElementById("name").value;
      var newRow = document.createElement("div");
      newRow.classList.add("c-sbblok__row");
      newRow.setAttribute("draggable", "true");
      //console.log(newRowName)
      var rowTitle = document.createElement("h1");
      rowTitle.innerHTML = newRowName;
      //console.log(rowTitle)
      newRow.appendChild(rowTitle);
      //console.log(newRow)
      newRow.innerHTML += "<div id='popup' class='c-sbblok__img c-sbblok__img--add'><img class='c-sbblok__add' src='../img/plus.svg'/></div>";
      document.getElementById("product-rows").appendChild(newRow);
      //console.log(document.getElementById("product-rows"))
    });

    document.querySelector("#popup").addEventListener("click", function () {
        console.log("clicked")
        var popup = document.createElement("div");
        popup.classList.add("c-sbblok__popup");
        var button1 = document.createElement("a");
        button1.href = "../film-input.html";
        button1.innerHTML = "<button class='c-btn'>voeg nieuwe film toe</button";
        var button2 = document.createElement("button");
        button2.innerHTML = "voeg bestaande film toe";
        button2.className = "c-btn";
        var closeBtn = document.createElement("button");
        closeBtn.className = "c-closebtn"
        closeBtn.innerHTML = "X";
        closeBtn.style.position = "absolute";
        closeBtn.addEventListener("click", function () {
            popup.remove();
        });
        popup.appendChild(closeBtn);
        popup.classList.add("popup");
        popup.appendChild(button1);
        popup.appendChild(button2);
        document.body.appendChild(popup);
    });

    $(".c-sbblok__row").draggable({
        connectToSortable: "#product-rows",
        helper: "clone",
        stop: function(event, ui) {
            $(this).remove();
        }
    });
    $("#product-rows").sortable({
        receive: function(event, ui) {
            $(this).prepend(ui.item);
        }
    });


}
fetch("../json/products.json")
    .then(response => response.json())
    .then(data => {
        var categories = ["animatie", "horror", "drama"];
        var productRows = document.getElementById("product-rows");

        categories.forEach(category => {
            var categoryRow = document.createElement("div");
            categoryRow.classList.add("c-sbblok__row");
            var productNames = [];

            var categoryTitle = document.createElement("h1");
            categoryTitle.innerHTML = category;
            categoryRow.appendChild(categoryTitle);

            var listing = document.createElement("div");
            listing.classList.add("c-sbblok__wrap");

            var addMovieDiv = document.createElement("div");
            addMovieDiv.innerHTML = "<div id='popup' class='c-sbblok__img c-sbblok__img--add'><img class='c-sbblok__add' src='../img/plus.svg'/></div>";
            addMovieDiv.classList.add("c-sbblok__img");
            listing.appendChild(addMovieDiv);


            data.products.forEach(product => {
                if (product.categorie === category && product.title && product.image && !productNames.some(name => name === product.title)) {
                    var productDiv = document.createElement("div");
                    productDiv.style.backgroundImage = "url(" + product.image + ")";
                    productDiv.style.backgroundSize = "cover";
                    productDiv.classList.add("c-sbblok__img");
                    listing.appendChild(productDiv);
                    productNames.push(product.title);
                }
            });
            categoryRow.appendChild(listing);
            productRows.appendChild(categoryRow);
        });
    });
