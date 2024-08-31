
const Home = () => {

  //now gotta grab and host API 

  return (
    <main className="" style={{"height": "90vh"}}>
      <h1 className="flex justify-center my-6 text-4xl animate-bounce font-serif">
        Bit Cringe Innit
      </h1>

      <div className="grid grid-cols-6 w-9/12 h-5/6 m-auto"> 
        {/* will need to play with the style again after I get data to show it */}
        <div id="img-box" className="border col-span-5 row-span-full p-1" style={{}}>
          main img box
        </div>

        <div id="tag-list" className="border row-span-full p-1">
          {/* tag list,  */}
          tag list
        </div>
      </div>

    </main>
  );
}

export default Home;