import React from "react";
import ObjectivImage from "../assets/driverHappy.jpeg";

function InteresedOnTheWork() {
  return (
    <div className="bg-gradient-to-br from-sky-100 to-indigo-200 rounded-3xl p-8 shadow-2xl transition-all duration-500 ease-in-out hover:shadow-3xl">
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div className="w-full md:w-1/2 flex flex-col items-center space-y-6 bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="w-full overflow-hidden rounded-xl shadow-md">
          <img 
            className="w-full h-64 object-cover rounded-xl transform transition-transform duration-500 hover:scale-105" 
            src={ObjectivImage} 
            alt="Mudanzas" 
          />
        </div>
        <div className="w-full space-y-4">
          <p className="text-gray-700 text-lg font-semibold mb-2 pl-4 border-l-4 border-sky-500 transition-all duration-300 hover:border-l-8">
            Te interesa hacer mudanzas?
          </p>
          <p className="text-gray-700 text-lg font-semibold mb-2 pl-4 border-l-4 border-sky-500 transition-all duration-300 hover:border-l-8">
            Buscas buen ambiente laboral?
          </p>
          <p className="text-gray-700 text-lg font-semibold mb-2 pl-4 border-l-4 border-sky-500 transition-all duration-300 hover:border-l-8">
            Buscas sostenibilidad Economica?
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl border-2 border-sky-500">
        <div className="mb-6">
          <p className="text-sky-600 text-3xl font-bold text-center leading-tight">
            Registrate para ser parte de nosotros!!
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-xl mb-6 font-semibold">
            Solo tomará <span className="text-sky-500">5 minutos</span> de tu tiempo
          </p>
          <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
            Click aquí
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default InteresedOnTheWork;
