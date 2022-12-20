const searchFilter = function() {
    var searchInput = document.querySelector("#search-input");
  
    searchInput.addEventListener("keyup", function (e) {
        var search_item = e.target.value.toLowerCase();
        var span_items = document.querySelectorAll(".js-table__body--name");
        //console.log(span_items);
  
        span_items.forEach(function(item){
          if(item.textContent.toLowerCase().indexOf(search_item) != -1){
            item.closest(".js-table__body--row").style.display = "table-row";
          }
          else {
            item.closest(".js-table__body--row").style.display = "none";
          }
        });
    });
};

const init = function() {
  if (document.querySelector(".js-page-table")) {
    searchFilter();
  }
}

document.addEventListener("DOMContentLoaded", init);