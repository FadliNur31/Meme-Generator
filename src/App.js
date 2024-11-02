import { useEffect, useState } from "react";

let allMemes = [];
function App() {
  const [meme, setMeme] = useState({
    "Top Text": " ",
    "Bottom Text": " ",
    url: "",
  });

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      allMemes = data.data.memes;
    }
    getData();
  }, []);

  let handleClick = () => {
    let random = Math.floor(Math.random() * allMemes.length);
    let link = allMemes[random].url;
    console.log(random);
    setMeme({
      ...meme,
      url: link,
    });
  };

  let handleChange = (e) => {
    if (e.target.placeholder == "Top Text") {
      setMeme({
        ...meme,
        ["Top Text"]: e.target.value,
      });
    } else {
      setMeme({
        ...meme,
        ["Bottom Text"]: e.target.value,
      });
    }
  };
  return (
    <div className="App">
      <form className="flex justify-around min-h-11 mt-4" method="POST">
        <input
          type="text"
          placeholder="Top Text"
          className=" border-2 rounded-md border-white w-full  mx-5  px-2"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Bottom Text"
          className=" border-2 rounded-md border-white  w-full mx-5 px-2"
          onChange={handleChange}
        ></input>
      </form>
      <div className="flex justify-center mt-4">
        <button
          className="border-2 p-2 mt-3 w-full rounded-md mx-5 bg-indigo-500 text-white"
          onClick={handleClick}
        >
          Generate A meme
        </button>
      </div>
      <div className="w-full relative text-center flex justify-center">
        {meme.url !== "" && (
          <img className="my-5 max-w-xl " src={meme.url} alt="meme" />
        )}
        <h2 className="absolute top-12 text-3xl uppercase text-white ">
          {meme["Top Text"]}
        </h2>
        <h2 className="absolute bottom-5 text-3xl uppercase text-white">
          {meme["Bottom Text"]}
        </h2>
      </div>
    </div>
  );
}

export default App;
