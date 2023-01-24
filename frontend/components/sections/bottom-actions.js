import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import NextImage from "@/components/elements/image"

const BottomActions = ({ data }) => {
  const {
    title,
    buttons,
    left_picture: leftPicture,
    right_picture: rightPicture,
  } = data
  return (
    <section className="bg-primary px-10 py-8 mx-10 my-24 text-center rounded-lg flex justify-center">
      <div className="w-28 m-auto hidden lg:block">
        <NextImage media={leftPicture} />
      </div>
      <div>
        <h2 className="text-2xl text-white mb-10">{title}</h2>
        {/* Buttons row */}
        <div className="container flex flex-row justify-center flex-wrap gap-4 custom-rounded">
          {buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "dark")}
              key={button.id}
            />
          ))}
        </div>
      </div>
      <div className="w-28 m-auto hidden lg:block">
        <NextImage media={rightPicture} />
      </div>
    </section>
  )
}

export default BottomActions
