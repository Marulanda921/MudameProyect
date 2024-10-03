import React from 'react';
import { Link } from 'react-router-dom';
import UpperRoad from './UpperRoad';



function LoginUser() {
    return (
        <div className='flex w-full h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200'>
        <div className='w-full flex items-center justify-center lg:w-1/2 p-8'>
          <div className='max-w-md w-full bg-white shadow-2xl rounded-3xl p-10 transition-all duration-300 ease-in-out hover:shadow-3xl'>
            <h1 className='text-4xl font-bold text-blue-600 mb-2'>Iniciar sesión</h1>
            <p className='text-lg text-gray-600 mb-8'>Portal Cliente Mudame</p>
  
            <div className='space-y-6'>
              <div>
                <label className='text-sm font-medium text-gray-700 block mb-1'>Email</label>
                <input 
                  className='w-full border-2 border-blue-300 rounded-xl p-4 transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200' 
                  placeholder='Ingresa tu Email'
                />
              </div>
  
              <div>
                <label className='text-sm font-medium text-gray-700 block mb-1'>Password</label>
                <input 
                  className='w-full border-2 border-blue-300 rounded-xl p-4 transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200' 
                  placeholder='Ingresa tu Contraseña'
                  type='password'
                />
              </div>
  
              <div className='space-y-4 pt-4'>
                <button className='w-full py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 active:scale-95'>
                  Iniciar Sesion
                </button>
                
                <Link to="/register" className='block'>
                  <button className='w-full py-4 rounded-xl bg-gray-100 text-blue-600 text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-md transform hover:-translate-y-1 active:scale-95'>
                    Registrarse
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className='hidden lg:flex relative h-full w-1/2 items-center justify-center bg-blue-600 overflow-hidden'>
          <div className='relative z-10 p-8 text-center'>
            <div className='w-48 h-48 mx-auto bg-white rounded-full p-8 shadow-2xl mb-8 animate-pulse'>
              <img src="src/assets/logo.png" alt="Mudame Logo" className='w-full h-full object-contain' />
            </div>
            <h2 className='text-3xl font-bold text-white mb-4'>Bienvenido a Mudame</h2>
            <p className='text-xl text-blue-100'>Tu solución confiable para mudanzas</p>
          </div>
          <div className='absolute inset-0 bg-blue-500 opacity-50 animate-pulse'></div>
        </div>
      </div>
    );
}

export default LoginUser;