import steps from "@/utils/steps";

const Steps = () => {
  return (
    <>
     <div className="flex-col flex items-center justify-center mt-[3rem] sm:mt-[5rem]">
        <p className="text-4xl font-quicksand text-custom-green">
          Steps To Download
        </p>

        <div className="grid justify-center grid-cols-1 gap-10 py-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="max-w-sm mx-auto overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:translate-y-4 hover:bg-gray-100 hover:shadow-xl hover:shadow-custom-teal"
            >
              <div className="flex items-center justify-center">
                <div
                  className="flex items-center self-center justify-center w-24 h-28"
                  dangerouslySetInnerHTML={{ __html: step.img }} // Corrected line
                />
              </div>
              
              <div className="p-4 py-8">
                <h2 className="text-2xl font-semibold text-center">{step.heading}</h2>
                <p className="mt-5 text-center text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Steps;
