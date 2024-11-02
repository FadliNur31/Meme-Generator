function Nav() {
  return (
    <div className="App">
      <div className="w-100 bg-indigo-500 flex p-5 justify-between">
        <div className="flex justify-center gap-2">
          <img src="troll-face.svg" className=" w-9"></img>
          <h1 className="font-sans font-extrabold text-white text-lg">
            Meme Generator
          </h1>
        </div>
        <div>
          <h3 className="text-white">React Course</h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
