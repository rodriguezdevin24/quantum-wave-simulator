import  { useState, useEffect, useRef } from 'react';

// Simple Wave Function Visualization
const QuantumWaveSimulation = () => {
  const canvasRef = useRef(null);
  const [wavelength, setWavelength] = useState(50);
  const [amplitude, setAmplitude] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw wave
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 123, 255, 0.8)';
    ctx.lineWidth = 2;

    for (let x = 0; x < width; x++) {
      // Simple sine wave calculation
      const y = height / 2 + 
        amplitude * 50 * Math.sin(
          (x / wavelength) * (2 * Math.PI)
        );
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }, [wavelength, amplitude]);


  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="p-4 bg-gray-20 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Quantum Wave Simulator</h2>
        <div className="mb-4">
          <label className="block mb-2">Wavelength: {wavelength}</label>
          <input 
            type="range" 
            min="10" 
            max="200" 
            value={wavelength}
            onChange={(e) => setWavelength(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Amplitude: {amplitude.toFixed(2)}</label>
          <input 
            type="range" 
            min="0.1" 
            max="2" 
            step="0.1"
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <canvas 
          ref={canvasRef} 
          width="400" 
          height="200" 
          className="border border-gray-300 rounded"
        />
        <p className="text-sm mt-2 text-white-600">
          This simulation demonstrates a basic wave function visualization. 
          Adjust wavelength and amplitude to explore quantum wave behavior.
        </p>
      </div>
    </div>
  );
};

export default QuantumWaveSimulation;


