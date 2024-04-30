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
        <div className="flex flex-col items-center justify-center w-[80%] bg-gradient-to-br from-blue-100 to-blue-600 rounded-md shadow-lg text-xl gap-5 p-6 md:w-[500px]">
          <h1 className="mt-4 font-bold text-slate-900 text-2xl">
            URL Shortner
          </h1>
          <input onChange={handlechange} className="w-full p-2 " type="text" />
          <button
            onClick={handleclick}
            className="border p-3 m-4 bg-green-600 text-white rounded-full hover:bg-stone-100 hover:text-gray-800 transition-colors duration-300"
          >
            Shorten URL
          </button>
          {shortUrl ? (
            <p className="">
              <a
                className="font-sans text-blue-100 bg-gray-700 p-1 whitespace-nowrap rounded-md"
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortUrl}
              </a>
              <button onClick={handleCopy} className="m-2 hover:scale-110 ">
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
