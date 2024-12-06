import { useEffect } from "react";

const drawWave = (ctx, width, height, wavelength, amplitude, waveType) => {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.strokeStyle = "rgba(0, 123, 255, 0.8)";
  ctx.lineWidth = 2;

  const sigma = wavelength / (4 * Math.PI);
  const centerX = width / 2;

  for (let x = 0; x < width; x++) {
    let y;
    const normalizedX = (x / wavelength) * (2 * Math.PI);

    switch (waveType) {
      case "sine":
        y = height / 2 + amplitude * 50 * Math.sin(normalizedX);
        break;
      case "square":
        y = height / 2 + amplitude * 50 * (Math.sin(normalizedX) > 0 ? 1 : -1);
        break;
      case "gaussian":
        // Gaussian wave with peak at the center

        y =
          height / 2 +
          amplitude *
            50 *
            Math.exp(-Math.pow(x - centerX, 2) / (2 * Math.pow(sigma, 2))) *
            Math.sin(normalizedX);
        break;
      default:
        y = height / 2 + amplitude * 50 * Math.sin(normalizedX);
    }

    if (x === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
};

const useWaveCanvas = (canvasRef, wavelength, amplitude, waveType) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    drawWave(ctx, width, height, wavelength, amplitude, waveType);
  }, [canvasRef, wavelength, amplitude, waveType]);
};

export default useWaveCanvas;
