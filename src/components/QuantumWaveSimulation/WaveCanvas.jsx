import PropTypes from 'prop-types';
import { useRef } from 'react';
import useWaveCanvas from './useWaveCanvas';

const WaveCanvas = ({ wavelength, amplitude }) => {
  const canvasRef = useRef(null);
  useWaveCanvas(canvasRef, wavelength, amplitude);

  return (
    <canvas
      ref={canvasRef}
      width="400"
      height="200"
      className="border border-gray-300 rounded mx-auto mb-4"
    />
  );
};

WaveCanvas.propTypes = {
    wavelength: PropTypes.number.isRequired,
    amplitude: PropTypes.number.isRequired,
  };

export default WaveCanvas;
