import { useState } from 'react';
import WaveCanvas from './WaveCanvas';
import Slider from './Slider';

const QuantumWaveSimulation = () => {
  const [wavelength, setWavelength] = useState(50);
  const [amplitude, setAmplitude] = useState(1);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="p-4 bg-gray-20 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          Quantum Wave Simulator
        </h2>
        <Slider
          label="Wavelength"
          value={wavelength}
          min={10}
          max={200}
          step={1}
          onChange={(e) => setWavelength(Number(e.target.value))}
        />
        <Slider
          label="Amplitude"
          value={amplitude.toFixed(2)}
          min={0.1}
          max={2}
          step={0.1}
          onChange={(e) => setAmplitude(Number(e.target.value))}
        />
        <WaveCanvas wavelength={wavelength} amplitude={amplitude} />
        <p className="text-sm mt-2 text-white-600 text-center">
          This simulation demonstrates a basic wave function visualization.
          Adjust wavelength and amplitude to explore quantum wave behavior.
        </p>
      </div>
    </div>
  );
};

export default QuantumWaveSimulation;