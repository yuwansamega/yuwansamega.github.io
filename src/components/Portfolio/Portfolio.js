import React from 'react';
import milea from '../../image/milea.png';
import sipeta from '../../image/sipeta.png';

const Portfolio = () => {
  return (
    
    <section id='portfolio' className="pt-24 pb-24 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h4 className="font-semibold text-base lg:text-lg uppercase mb-2 text-primary">Portfolio</h4>
            <h2 className="font-bold text-dark text-xl lg:text-2xl mb-4">Featured Project</h2>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden hover:ring-2 hover:ring-primary">
              <a href="http://milea.sifa.co.id/">
                <img src={milea} width="w-full" alt="MILEA" />
              </a>
            </div>
            <div className="flex flex-row w-full mt-3 gap-1 text-sm font-medium">
                <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                <p className="mr-2">Bootstrap</p>
                <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                <p className="mr-2">Laravel</p>
                <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                <p className="">MySQL</p>
            </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">MILEA</h3>
              <p className="font-medium text-base text-secondary">MILEA is an online service platform to make it easier for users to participate in training at Siti Fatimah Hospital, South Sumatra Province.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden hover:ring-2 hover:ring-primary">
              <a href='http://if.ilkom.unsri.ac.id/sipeta/'>
                <img src={sipeta} width="w-full" alt="SIPEtA" />
              </a>
            </div>
            <div className="flex flex-row w-full mt-3 gap-1 text-sm font-medium">
                <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                <p className="mr-2">Bootstrap</p>
                <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                <p className="mr-2">Code Igniter</p>
                <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                <p className="">MySQL</p>
            </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">SIPETA</h3>
              <p className="font-medium text-base text-secondary">Sipeta or Final Project Search System, is a student Final Project data center where final project data search services are provided for lecturers and students of Informatics Engineering Faculty of Computer Science, University.</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Portfolio