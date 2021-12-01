import "./imageList.css"
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((img) => (
    <ImageCard image = {img} key={img.id} />
  ));

  return <div className="image-list">{images}</div>;
};

export default ImageList;
