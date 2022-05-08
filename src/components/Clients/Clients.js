import React from 'react'
import RSUD from '../../image/rsud.png'
import Prodigies from '../../image/prodigies.png'
import Unsri from '../../image/unsri.png'

const Clients = () => {
  return (
    
    <section id='clients' className="pt-32 pb-32 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-2">
              <h4 className="font-semibold text-bae lg:text-lg uppercase mb-2 text-primary">Clients</h4>
              <h2 className="font-bold text-slate-100 text-xl lg:text-2xl mb-4">Partner Works</h2>
              <p className="font-medium text-md text-secondary">The partners and where you can find them.</p>
            </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center items-center">
            <a href="" className="max-w-[13rem] mx-4 py-4 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img src={RSUD} alt="RSUD Siti Fatimah" />
            </a>
            <a href="" className="max-w-[13rem] mx-4 py-4 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img src={Prodigies} alt="Prodigies Data Indonesia" />
            </a>
            <a href="" className="max-w-[7rem] mx-4 py-4 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img src={Unsri} alt="Universitas Sriwijaya" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients