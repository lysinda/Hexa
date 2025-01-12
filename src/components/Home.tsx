function Home() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="images/hand_left.png"
        className="absolute left-4 bottom-4 w-1/4"
      ></img>
      <img
        src="images/hand_right.png"
        className="absolute right-4 bottom-4 w-1/4"
      ></img>
      <img src="images/hexa.png" className="w-1/3 z-10 pt-8"></img>
      <h1 className="absolute text-7xl font-handlee bottom-8">Predicting The Future</h1>
      <div className="w-2/3 mt-64 mb-20 h-screen flex justify-center items-center">
        <img src="images/raven.png" className="absolute w-1/2"></img>
        <div className="w-2/3 pl-16 -mt-6 text-6xl leading-relaxed font-handlee z-10">
          <p>Your Future Is Not</p>
          <p className="text-right">Written In The Stars</p>
          <p>But In Patterns</p>
          <p className="text-right">Yet To Be Revealed</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
