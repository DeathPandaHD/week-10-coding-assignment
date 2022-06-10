document.getElementById("image").addEventListener("click", () => {
    function getUrl() {
      var url = prompt("Enter image URL");
      if (url) {
        return url;
      } else {
        return getUrl();
      }
    }
    image.src = getUrl();
  });


  <button id="image" class="btn btn-secondary from-control">add image</button>