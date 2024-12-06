// import React from 'react';
import PropTypes from 'prop-types';

const WaveTypeSelector = ({ currentWaveType, onWaveTypeChange }) => {
  const waveTypes = [
    { id: 'sine', label: 'Sine Wave' },
    { id: 'square', label: 'Square Wave' },
    { id: 'gaussian', label: 'Gaussian Wave' }
  ];

  return (
    <div className="mb-4">
      <label className="block mb-2 text-center">Wave Type</label>
      <div className="flex justify-center space-x-2">
        {waveTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onWaveTypeChange(type.id)}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              currentWaveType === type.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};

WaveTypeSelector.propTypes = {
  currentWaveType: PropTypes.string.isRequired,
  onWaveTypeChange: PropTypes.func.isRequired
};

export default WaveTypeSelector;