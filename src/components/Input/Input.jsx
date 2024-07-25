const Input = () => {
  return (
    <>
      <div className="flex flex-col">
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
            className="w-[30rem] border-custom-green border rounded h-10 placeholder:pl-4 outline-none focus:outline-custom-teal"
            
            />

            <button className="text-2xl font-extrabold tracking-tight border bg-custom-green font-quicksand w-[30rem] mt-10 rounded-lg border-custom-green h-12 text-center hover:bg-custom-teal duration-300 hover:border-custom-orange">
                Download
            </button>
            
            
          </div>
        </section>
        <div className="flex flex-col items-center justify-center">
            <h2 className="py-10 text-3xl text-start text-slate-200">
            Easy way to download slides from Slideshare
            </h2>
            <p className="flex  justify-center items-center max-w-[940px] text-white">
            SlidesDownloader.net is a great & free Slideshare downloader tool used to download slides from Slideshare in PDF and PPT format. It is the best Slideshare to PDF converter and Slideshare to PPT converter in the market. After you have downloaded the slides, you can view them anytime on your device without having the internet connection.
            </p>
        </div>
      </div>
    </>
  );
};

export default Input;
