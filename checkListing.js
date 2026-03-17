// checkListing.js
const button = document.getElementById('checkBtn');

button.addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    alert("Paste a URL first!");
    return;
  }
  alert("URL entered: " + url);
});
