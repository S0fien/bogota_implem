import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"

const BottomActions = ({ data }) => {
  return (
    <section className="bg-primary px-10 py-8 mx-10 my-24 text-center rounded-lg">
      <h2 className="text-2xl text-white mb-10">{data.title}</h2>
      {/* Buttons row */}
      <div className="container flex flex-row justify-center flex-wrap gap-4 custom-rounded">
        {data.buttons.map((button) => (
          <ButtonLink
            button={button}
            appearance={getButtonAppearance(button.type, "dark")}
            key={button.id}
          />
        ))}
      </div>
    </section>
  )
}

export default BottomActions
