import NextImage from "@/components/elements/image"

const KeyFigures = ({ data }) => {
  console.log("into key figures with data ", data)
  return (
    <section className="container overflow-hidden text-gray-700 my-8">
      <h3
        className={
          "text-2xl text-primary text-center lg:text-left py-8 font-light"
        }
      >
        Cifras clave
      </h3>
      <div className="mx-auto w-full">
        <div className="flex flex-wrap -m-1 md:-m-2 lg:justify-center ">
          {data &&
            data.key_figure.map((keyFigure, index) => (
              <div
                key={`key_figure_${index}`}
                className={`w-full flex justify-evenly mb-6 lg:w-1/4 lg:flex-row ${
                  index % 2 !== 0 && "flex-row-reverse"
                }`}
              >
                <div
                  className="flex flex-wrap lg:w-full w-1/3 lg:mx-4"
                  key={index}
                >
                  <div className="w-full bg-secondary text-white flex justify-center items-center flex-col text-2xl p-8 lg:p-0 text-center">
                    <p className={"text-4xl mb-4"}>{keyFigure.figure}</p>
                    <span>{keyFigure.content}</span>
                  </div>
                </div>
                <div
                  className="flex flex-wrap lg:w-full w-1/3 lg:mx-4"
                  key={index}
                >
                  <div className="w-full">
                    <NextImage
                      className="block object-cover object-center w-full h-full rounded-lg"
                      media={keyFigure.picture}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFigures
