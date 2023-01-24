import NextImage from "../elements/image"

const OurClients = ({ data }) => {

  const { client } = data
  return (
    <div className="flex flex-row lg:flex-row lg:flex-wrap gap-12 align-top py-12 px-12 features-columns-group bg-gray-50">
      {client.map((feature) => (
        <div className="flex-1 text-lg" key={feature.id}>
          <div className="w-10 h-10 m-auto">
            <NextImage media={feature.icon} />
          </div>
          {/*TODO: check if needed for caroussel*/}
        </div>
      ))}
    </div>
  )
}

export default OurClients
