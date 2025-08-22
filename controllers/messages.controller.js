const path = require("path");
// /folder/files.jpg or \folder\files.jpg

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends",
    friend: "Elon Musk",
  });
  //res.sendFile(path.join(__dirname, "..", "public", "images", "skimountain.jpg"));
  //res.send("<ul><li>Hello Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages ...");
}

module.exports = {
  getMessages,
  postMessage,
};
