import { getStrapiMedia } from "utils/media"
import Image from "next/image"
import PropTypes from "prop-types"
import { mediaPropTypes } from "utils/types"

const NextImage = ({ media, ...props }) => {
  //TODO: change later?
  if (!media.data) {
    return null
  }

  const { url, alternativeText, width, height } = media.data.attributes

  const loader = ({ src, width }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      <Image
        media={media}
        loader={loader}
        src={url}
        alt={alternativeText || ""}
        {...props}
      />
    )
  }

  // The image is responsive
  return (
    <Image
      media={media}
      loader={loader}
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
      {...props}
    />
  )
}

Image.propTypes = {
  media: mediaPropTypes.isRequired,
  className: PropTypes.string,
}

export default NextImage
