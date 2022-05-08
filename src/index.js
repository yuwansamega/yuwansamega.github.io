import React from "react";
import App from './App';
import {createRoot} from "react-dom/client"
import './index.css'


const root = createRoot(document.getElementById("root"));
root.render(<App/>);

window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  }else{
    header.classList.remove('navbar-fixed');
  }

}

//Hamburger
