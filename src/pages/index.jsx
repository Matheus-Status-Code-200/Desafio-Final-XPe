import Triangulo from './Triangulo';
import Quadrado from './Quadrado';
import Circulo from './Circulo';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl p-3">Calculadora de Áreas</h1>
      <h2 className="text-2xl p-10">Desafio do Bootcamp 01 XP educação</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <Triangulo />
        </div>
        <div className="w-full ml-5 md:w-1/3">
          <Quadrado />
        </div>
        <div className="w-full md:w-1/3 ">
          <Circulo />
        </div>
      </div>
      <footer className="mt-12 mb-12 text-center text-gray-500">
        Criado por Matheus, aluno da turma 2 XPe
      </footer>
    </div>
  );
}
