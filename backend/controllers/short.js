const Short = require("../models/short");

const ShortUniqueId = require("short-unique-id");
const { randomUUID } = new ShortUniqueId({ length: 10 });

const getallurls = async (req, res) => {
  try {
    const data = await Short.find().exec();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const storeUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "Long url is required" });
  }
  try {
    const urlid = randomUUID();
    Short.create({ url, urlid });
    const shortUrl = `https://sur-1xnj.onrender.com/${urlid}`;
    res.status(200).json({ shortUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getallurls, storeUrl };
