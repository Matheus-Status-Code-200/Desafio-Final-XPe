import { useState } from 'react';

export default function Quadrado() {
  const [side, setSide] = useState('');
  const [area, setArea] = useState('');
  const [perimeter, setPerimeter] = useState('');

  const calculateArea = () => {
    const parsedSide = parseFloat(side);

    if (!isNaN(parsedSide)) {
      const calculatedArea = parsedSide * parsedSide;
      const calculatedPerimeter = 4 * parsedSide;

      setArea(calculatedArea.toFixed(2));
      setPerimeter(calculatedPerimeter.toFixed(2));
    } else {
      setArea('');
      setPerimeter('');
    }
  };

  const resetValues = () => {
    setSide('');
    setArea('');
    setPerimeter('');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h1 className="text-2xl mb-4">Área e Perímetro do Quadrado</h1>
        <div className="flex  ml-24 justify-center items-center h-40 w-40 bg-cyan-500">
          <div className="flex items-center mb-4">
            <label htmlFor="side" className="gap-2">
              Lado:
            </label>
            <input
              type="number"
              id="side"
              className="border ml-2 w-12 mr-2"
              value={side}
              onChange={(e) => setSide(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
