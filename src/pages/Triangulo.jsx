import { useState } from 'react';

export default function Triangulo() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');
  const [perimeter, setPerimeter] = useState('');

  const calculateArea = () => {
    const parsedBase = parseFloat(base);
    const parsedHeight = parseFloat(height);

    if (!isNaN(parsedBase) && !isNaN(parsedHeight)) {
      const calculatedArea = (parsedBase * parsedHeight) / 2;
      const calculatedPerimeter = parsedBase * 3;
      setArea(calculatedArea.toFixed(2));
      setPerimeter(calculatedPerimeter.toFixed(2));
    } else {
      setArea('');
      setPerimeter('');
    }
  };

  const resetValues = () => {
    setBase('');
    setHeight('');
    setArea('');
    setPerimeter('');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h1 className="text-2xl mb-4">Área e Perímetro do Triângulo</h1>
        <div className="flex items-center mb-2">
          <label htmlFor="height" className="mr-2">
            Altura:
          </label>
          <input
            type="number"
            id="height"
            className="border p-1 mr-1 w-12"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <div className="flex items-center " id='triangulo-para-cima'></div>
        </div>
        <div className="flex items-center mt-2 mb-4">
          <label htmlFor="base" className="ml-28 w-8">
            Base:
          </label>
          <input
            type="number"
            id="base"
            className="border w-12  p-1 ml-2.5"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateArea}
        >
          Calcular
        </button>
        {area && (
          <div className="mt-4">
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
