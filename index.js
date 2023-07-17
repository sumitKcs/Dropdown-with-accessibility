document.getElementById("teams").addEventListener("keydown", (e) => {
  if (e.keyCode == 32) {
    console.log("hello");
    if (e.target.id == "teams") {
      console.log("hiie");
      document
        .getElementsByClassName("child_list_items")[0]
        .classList.add("displayDropdownOnKeyPress");
    }
  }
});
