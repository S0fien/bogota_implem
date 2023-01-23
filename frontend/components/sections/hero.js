import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

const Hero = ({ data }) => {
  const { label, title, description, buttons, smallTextWithLink, picture } =
    data

  return (
    <main className="container flex flex-col lg:flex-row-reverse items-start justify-between lg:px-20 lg:py-8">
      <div className="flex-1 sm:pl-8">
        <p className="uppercase tracking-wide font-semibold">{label}</p>
        <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2 text-primary text-center py-4">
          {title}
        </h1>
        <p className="text-xl mb-6 text-center text-secondary">{description}</p>
        <div className="flex flex-row flex-wrap gap-4">
          {buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "light")}
              key={button.id}
            />
          ))}
        </div>
        <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
          <Markdown>{smallTextWithLink}</Markdown>
        </div>
      </div>
      <div className="flex-shrink-0 w-full lg:w-6/12 mt-6 md:mt-0 w-full">
        <NextImage media={picture} className={"rounded-lg"} />
      </div>
    </main>
  )
}

export default Hero
