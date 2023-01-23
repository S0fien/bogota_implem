import NextImage from "../elements/image"

const FeatureColumnsGroup = ({ data }) => {
  return (
    <div className="flex flex-row lg:flex-row lg:flex-wrap gap-12 align-top py-12 px-12 features-columns-group bg-gray-50">
      {data.features.map((feature) => (
        <div className="flex-1 text-lg" key={feature.id}>
          <div className="w-10 h-10 m-auto">
            <NextImage media={feature.icon} />
          </div>
          {/*TODO: check if needed for caroussel*/}
          {/*<h3 className="font-bold mt-4 mb-4">{feature.title}</h3>*/}
          {/*<p>{feature.description}</p>*/}
        </div>
      ))}
    </div>
  )
}

export default FeatureColumnsGroup
