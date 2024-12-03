import { useEffect } from 'react';

const useWaveCanvas = (canvasRef, wavelength, amplitude) => {
  useEffect(() => {
    if (!canvasRef.current) return;

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
      const y =
        height / 2 +
        amplitude * 50 * Math.sin((x / wavelength) * (2 * Math.PI));

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }, [canvasRef, wavelength, amplitude]);
};

export default useWaveCanvas;