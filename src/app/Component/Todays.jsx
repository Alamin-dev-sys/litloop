
const CardComponent = () => (
    <div className="wrapper flex w-[90%] justify-around mx-auto">
      <div className="card relative w-[280px] h-[360px] rounded-[15px] p-6 bg-white flex items-end transition-transform duration-400 ease-out shadow-[0px_7px_10px_rgba(0,0,0,0.5)] hover:before:opacity-100 group">
        <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[15px] before:bg-black before:bg-opacity-60 before:z-2 before:transition-opacity before:duration-500 before:opacity-0"></div>
        <img
          src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
          alt="Mountain"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px]"
        />
        <div className="info relative z-3 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 top-[50%] transform translate-y-8">
          <h1 className="text-xl font-bold">Mountain</h1>
          <p className="tracking-wide text-[15px] mt-2">Lorem Ipsum is simply dummy text from the printing and typesetting industry</p>
          <button className="px-4 py-2 mt-4 bg-white text-black font-bold rounded hover:bg-blue-500 hover:text-white transition-colors duration-400">Read More</button>
        </div>
      </div>
  
      {/* Repeat for other cards */}
    </div>
  );
  
  export default CardComponent;
  