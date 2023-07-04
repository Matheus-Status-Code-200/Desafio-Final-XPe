import { useState } from 'react';

export default function Circulo() {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState('');
  const [perimeter, setPerimeter] = useState('');

  const calculateArea = () => {
    const parsedRadius = parseFloat(radius);

    if (!isNaN(parsedRadius)) {
      const calculatedArea = Math.PI * parsedRadius * parsedRadius;
      const calculatedPerimeter = 2 * Math.PI * parsedRadius;

      setArea(calculatedArea.toFixed(2));
      setPerimeter(calculatedPerimeter.toFixed(2));
    } else {
      setArea('');
      setPerimeter('');
    }
  };

  const resetValues = () => {
    setRadius('');
    setArea('');
    setPerimeter('');
  };

  return (
    <div className="flex justify-center items-center w-400">
      <div className="bg-white p-8 shadow-lg rounded-lg ">
        <h1 className="text-2xl mb-4">Área e Perímetro do Círculo</h1>
        <div className="flex ml-16 justify-center items-center h-48 w-48 bg-cyan-500 rounded-full">
          <div className="flex items-center mb-4">
            <label htmlFor="radius" className="mr-2">
              Raio:
            </label>
            <input
              type="number"
              id="radius"
              className="border w-12 p-1 ml-2.5"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
          onClick={calculateArea}
        >
          Calcular
        </button>
        {area && (
          <div className="mt-2">
            <span className="font-bold">Área:</span> {area}
          </div>
        )}
        {perimeter && (
          <div className="mt-2">
            <span className="font-bold">Perímetro:</span> {perimeter}
          </div>
        )}
        {area && perimeter && (
          <button
            className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetValues}
          >
            Limpar
          </button>
        )}
      </div>
    </div>
  );
}
