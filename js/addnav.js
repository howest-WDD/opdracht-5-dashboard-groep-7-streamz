let mq = window.matchMedia("(max-width: 600px)");
  let list = document.getElementById("myList");

  function addListItem(mq) {
    if (mq.matches) {
      list.insertAdjacentHTML("beforeend", "<li>New item</li>");
    }
  }

  addListItem(mq);
  mq.addListener(addListItem);