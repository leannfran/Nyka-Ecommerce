import React from 'react';
import PropTypes from 'prop-types';

const ImageModal = ({ image, closeModal }) => {
  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div className="max-w-full max-h-full">
        <img src={image} alt="" className="object-contain max-h-full mx-auto" />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ImageModal;
