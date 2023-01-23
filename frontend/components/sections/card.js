import NextImage from "@/components/elements/image"
import { useEffect, useState } from "react"

const Card = ({ data }) => {
  const { title, content, picture, button_text, id } = data
  const [isEven, setIsEven] = useState(false)

  useEffect(() => {
    if (id % 2) setIsEven(true)
  }, [id, setIsEven])

  return (
    <div className="container flex justify-center">
      <div
        className={`rounded-lg bg-white my-14 mx-6 w-full lg:flex-row lg:flex lg:mx-0 lg:items-center ${
          isEven && "lg:flex-row-reverse"
        }`}
      >
        <NextImage
          className="block object-cover object-center w-full h-full rounded-lg"
          media={picture.data.attributes}
        />
        <a
          href="@/components/sections/card#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className={"lg:w-1/2 lg:block"}
        >
          <NextImage
            className="block object-cover object-center w-full lg:w-2/3 h-full rounded-lg"
            media={picture}
          />
        </a>
        <div
          className={`${
            isEven
              ? "bg-white text-secondary lg:-mr-16"
              : "bg-primary text-white lg:-ml-16"
          } shadow-lg py-6 px-14 border-primary border-2 rounded-lg text-center lg:w-1/2 lg:h-1/2 lg:z-50`}
        >
          <h3 className="text-3xl font-medium mb-2">{title}</h3>
          <p className="text-base mb-4">{content}</p>
          <button
            type="button"
            className={`${
              isEven ? "text-primary" : "text-white"
            } m-auto inline-block px-6 py-2.5 text-xl`}
          >
            {button_text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
