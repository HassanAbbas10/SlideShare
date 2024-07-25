const Input = () => {
  return (
    <>
      <div>
        <section className="mx-auto my-16">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-5xl text-white font-quicksand">
              SlideShare Downloader
            </h1>
            <p className="text-lg font-quicksand text-slate-300">
              Download Free (PPT/PDFs) Presentation
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-14">
            <p className="flex tracking-wide text-md font-quicksand text-slate-300 pr-[18rem] pb-2">
                SlideShare Link *
            </p>
            <input
            placeholder="https://www.slideshare.net/yamikaze/motivation-10"
            className="w-[30rem] border-custom-green border rounded h-10 placeholder:pl-4"
            
            />

            <button className="text-2xl font-extrabold tracking-tight border bg-custom-green font-quicksand w-[30rem] mt-10 rounded-lg border-custom-green h-12 text-center hover:bg-">
                Download
            </button>
            
            
          </div>
        </section>
      </div>
    </>
  );
};

export default Input;
