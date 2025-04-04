document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("changeText").addEventListener("click", function () {
    var demoParagraph = document.getElementById("demo");
    demoParagraph.innerHTML = "Text changed by button click!";
    updateCSS(demoParagraph);
  });

  // Modify CSS styles via Javascript
  function updateCSS(element) {
    element.style.color = "Purple";
  }

  // Add or remove an element when a button is clicked
  var contentDiv = document.getElementById("content");
  contentDiv.addEventListener("click", function () {
    var paragraphToAdd = document.createElement("p");
    paragraphToAdd.textContent = "This paragraph was added by another click.";
    if (!contentDiv.hasChildNodes()) {
      contentDiv.appendChild(paragraphToAdd);
    } else {
      if (contentDiv.lastChild) {
        contentDiv.removeChild(contentDiv.lastChild); // Remove the last child if one exists
      }
    }
  });
});
