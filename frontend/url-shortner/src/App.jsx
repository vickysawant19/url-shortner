import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [url, seturl] = useState();
  const [shortUrl, setShortUrl] = useState();

  useEffect(() => {}, [shortUrl]);

  const handlechange = (e) => {
    const url = e.target.value;
    seturl(url);
  };

  const handleclick = async (e) => {
    e.preventDefault();
    if (url) {
      const { data } = await axios.post("https://sur-1xnj.onrender.com/short", {
        url,
      });

      setShortUrl(data.shortUrl);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      alert("URL copied to clipboard");
    });
  };

  return (
    <>
      <div className="bg-sky-300 min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[80%] bg-gradient-to-br to-blue-300 from-blue-600 rounded-xl shadow-xl text-xl gap-5 p-6 md:w-[500px]">
          <h1 className="mt-4 font-bold text-3xl text-blue-100">
            URL Shortner
          </h1>
          <input
            onChange={handlechange}
            placeholder="Input or Paste URL to short."
            className="w-full p-2 rounded-xl shadow-xl placeholder:text-gray-300"
            type="text"
          />
          <button
            onClick={handleclick}
            className="border p-3 m-4 bg-green-600 text-white rounded-full hover:bg-stone-100 hover:text-gray-800 transition-colors duration-300"
          >
            Shorten URL
          </button>
          {shortUrl ? (
            <p className=" flex  w-full">
              <a
                className="font-sans text-blue-100 bg-gray-700 p-1 rounded-md"
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortUrl}
              </a>
              <button
                onClick={handleCopy}
                className="m-1 hover:scale-110 text-2xl "
              >
                📄
              </button>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
