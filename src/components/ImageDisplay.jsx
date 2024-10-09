import PropTypes from 'prop-types';

const ImageDisplay = ({ image, loading }) => {
  return (
    <div className="image-container">
      {loading ? (
        <p>Cargando imagen...</p>
      ) : (
        <img src={image} alt="Random Pokémon" />
      )}
    </div>
  );
};

ImageDisplay.propTypes = {
  image: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ImageDisplay;
