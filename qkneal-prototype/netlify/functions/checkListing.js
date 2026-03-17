const fetch = require("node-fetch");
const crypto = require("crypto");

exports.handler = async function(event, context) {
  const { url } = JSON.parse(event.body);

  try {
    const res = await fetch(url);
    const html = await res.text();

    const hash = crypto.createHash('md5').update(html.slice(0, 5000)).digest('hex');

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "ACTIVE", hash })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "ERROR", message: err.message })
    };
  }
};