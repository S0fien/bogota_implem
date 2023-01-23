import NextImage from "@/components/elements/image"
import axios from "axios"
import { useEffect, useState } from "react"

const ImagesGallery = ({ datak }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:1337/api/pictures?populate=*&?limit=-1"
      )
      setData(response.data.data)
    }
    fetchData()
  }, [])

  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="mx-auto w-full">
        <div className="flex flex-wrap -m-1 md:-m-2 images-gallery">
          {data &&
            data.map((image, index) => (
              <div className="flex flex-wrap lg:w-2/12 w-1/2" key={index}>
                <div className="w-full">
                  <NextImage
                    className="block object-cover object-center w-full h-full rounded-lg"
                    media={image.attributes.picture}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default ImagesGallery
