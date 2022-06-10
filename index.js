/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
a. A Bootstrap styled table representing your choice of data.
b. A Bootstrap styled form that allows users to add input data as a new row to the table when submitted.
*/
let id = 0;
let imgURL = "";
let addimgbutton = document
  .getElementById("image")
  .addEventListener("click", () => {
    function getUrl() {
      var promturl = prompt("Enter image URL");
      if (promturl) {
        imgURL = promturl;
      } else {
        return getUrl();
      }
    }
    image.src = getUrl();
  });
document.getElementById("add").addEventListener("click", () => {
  console.log(imgURL);

  let imagetag = document.createElement("img");
  imagetag.src = imgURL;
  console.log(imagetag);

  let table = document.getElementById("list");

  let row = table.insertRow(1);

  row.setAttribute("id", `test-${id}`);

  let parentimgcell = row.insertCell(0);

  parentimgcell.className = "parentimgcell";

  imagetag.className = "imagethumbnailsize";

  console.log(imagetag);

  console.log(parentimgcell);

  parentimgcell.appendChild(imagetag);

  row.insertCell(1).innerHTML = document.getElementById("Game-name").value;
  row.insertCell(2).innerHTML = document.getElementById("hours-played").value;
  row.insertCell(3).innerHTML =
    document.getElementById("new-critic-score").value;
  row.insertCell(4).innerHTML =
    document.getElementById("new-personal-score").value;
  let actions = row.insertCell(5);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("Game-name").value = "";
  document.getElementById("hours-played").value = "";
  document.getElementById("new-critic-score").value = "";
  document.getElementById("new-personal-score").value = "";
});

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: test-${id}`);
    let elementToDelete = document.getElementById(`test-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
