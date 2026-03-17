const button = document.getElementById('checkBtn');
const output = document.getElementById('output');

button.addEventListener('click', async () => {
  const url = document.getElementById('urlInput').value.trim();
  if (!url) {
    output.innerText = "Enter a URL first!";
    return;
  }

  try {
    // Try fetching the URL
    const res = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
    // If no error thrown, we assume Active (we can't read the response due to Facebook)
    output.innerText = "Status: Active";
  } catch (err) {
    // If fetch fails, we assume Not Found
    output.innerText = "Status: Not Found";
  }
});
