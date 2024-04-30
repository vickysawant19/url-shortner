const Short = require("../models/short");

const getUrl = async (req, res) => {
  const urlid = req.params.id;
  try {
    let { url } = await Short.findOne({ urlid: urlid }).exec();

    if (!url) {
      return res.status(400).json({ message: "No URL found" });
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      // If not, add "http://" as the default prefix
      url = "http://" + url;
    }

    res.redirect(url);
  } catch (error) {
    console.error("Error retrieving URL:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUrl };
