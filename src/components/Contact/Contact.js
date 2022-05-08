import React from 'react'

const Contanct = () => {
  return (
    <section id="contact" className="pt-36 pb-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-8">
              <h4 className="font-semibold text-lg uppercase mb-2 text-primary">Contact</h4>
              <h2 className="font-bold text-dark text-3lg mb-4">Coffee chat with me.</h2>
              <p className="font-medium text-md text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, libero dignissimos ducimus minus officiis eos deserunt consequatur qui sit ex.</p>
          </div>
        </div>
        <form>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-primary">Name</label>
              <input type="text" name="name" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:ring-1" />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
              <input type="text" name="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:ring-1" />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-primary">Message</label>
              <textarea name="message" id="message" rows="5" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:ring-1"></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold w-full text-slate-100 bg-primary py-3 px-8 rounded-full hover:opacity-60 hover:shadow-lg transition duration-300">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contanct