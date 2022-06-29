const App = () => (
  <div className="container md mx-auto bg-slate-500 h-screen">
    <div className='flex flex-col h-screen place-content-evenly'>
      <p className='text-center'>Hello mother!</p>
      <iframe
        className="mx-auto place-content-center"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HyWYpM_S-2c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <button className="p-2 bg-orange-200 text-center mx-auto">Look at me!</button>
    </div>
  </div>
);

export default App;
