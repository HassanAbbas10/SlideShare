/* eslint-disable react/prop-types */

const Description = ({headings,descriptions}) => {
  return (
    <>
  <div className="flex flex-col  items-center justify-center px-4 sm:px-6 md:px-8">
    <h2 className="my-10 hover:shadow-xl flex items-center justify-center hover:rounded-b-2xl hover:shadow-custom-teal duration-1000 cursor-pointer text-xl sm:text-2xl md:text-3xl text-center text-slate-200 border-b border-b-custom-teal w-fit px-3 max-w-[940px]">
      {headings.heading}
    </h2>
    {descriptions.map((data) => (
      <div key={data.id} className="py-5 w-full max-w-[940px]">
        <p className="flex justify-center items-center text-white text-sm sm:text-base md:text-lg">
          {data.description}
        </p>
      </div>
    ))}
  </div>
</>
  );
};

export default Description;
