import "./App.css";
import Card from "./components/Card";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import barber from "./assets/barber.jpg";
import roman from "./assets/roman.jpg";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Navbar from "./components/navbar/navbar";
import b from "./assets/b.png"
import c from "./assets/c.png"
import d from "./assets/d.png"


function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };
  const recipeAuthor = "Roberto y miguel";

  const recipeItem = {
    title: "Roberto Sanchez y Miguel Duran",
    date: "Desde abril 1998",
    image: barber,
    description:
      "Destacados por sus ambiciosos cortes y gran imaginacion.. solo cerra los ojos que ellos se encargan de todo.. ",
  };
  const recipeAuthor2 = "Efecan";

  const recipeItem2 = {
    title: "Manuel Ford y Esteban Rum",
    date: "Desde 1888 ",
    image: roman,
    description:
      "Duo dinamico exxtrovertido atrevido y serial, ambos forman un gran equipo, lo que buscan cuand",
  };
  const recipeAuthor3 = "G";

  const recipeItem3 = {
    title: "German Ese y Franco Fio",
    date: "Desde 1970 ",
    image: roman,
    description:
      "Peluquero con larga trayectoria, enfocado en el fade y degrades.. con gran talento y destreza! apasionado por la barber.",
  };
  const like3 = 245;
  const like1 = 87;
  const like = 193;
  const isLiked = true;

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <Navbar />
      <main data-scroll-container ref={ref}>
      <section className="inicio1" data-scroll-section>

      <div className="container2">
       <img className="card1" src={b} alt="Logo" /></div>
    
      
      <div className="container2">
      <img className="card1" src={c} alt="Logo" /></div>
      
      <div className="container2">
        <img className="card1" src={d} alt="Logo" /></div>
   
      
      <div className="container2">
         <img className="card1" src={b} alt="Logo" /></div>
     



      </section>
      

      

        <section className="nosotros" data-scroll-section>
          <h1
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="9"
          >
            I Love React
          </h1>
          <h1
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="9" // Values provided here affect the animations
          >
            That's why I code every day
          </h1>
        </section>
        <section className="inicio" data-scroll-section>
          <div className="container">
            <Card
              author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like}
            />
          </div>

          <div className="container">
            <Card1
              author={recipeAuthor2}
              title={recipeItem2.title}
              date={recipeItem2.date}
              description={recipeItem2.description}
              liked={isLiked}
              likeCount={like3}
            />
          </div>
          <div className="container">
            <Card2
              author={recipeAuthor3}
              title={recipeItem3.title}
              date={recipeItem3.date}
              description={recipeItem3.description}
              liked={isLiked}
              likeCount={like1}
            />
          </div>
        </section>

        <section className="contactanos" data-scroll-section>
          <section class="text">
            <h1
              className="op-class"
              data-scroll
              data-scroll-class="fadeIn"
              data-scroll-repeat="true"
              data-scroll-speed="0.2"
            >
              DESCUENTO MES DE MARZO
            </h1>
            <h2>
              <span>15% OFF</span>
              <br></br>" New clients "
            </h2>
            <a class="white-btn" href="#">
              - Book Now -
            </a>
          </section>
        </section>
        <section class="shop" data-scroll-section>
          <div className="container1">
            

            <svg className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <a class="white-btn1" href="#">
              - Carrito -
            </a>
            </div>
          <div className="container1">
            <svg className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              fill="currentColor"
              class="bi bi-calendar-date"
              viewBox="0 0 16 16"
            >
              <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
           
            <a class="white-btn1" href="#">
              - Turnos -
            </a>
          </div>
          <div className="container1">
            <svg className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              fill="currentColor"
              class="bi bi-shop"
              viewBox="0 0 16 16"
              
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
            </svg>
             <a class="white-btn1" href="#">
              - Shop -
            </a>

          </div>
       
        </section>

      </main>
    </LocomotiveScrollProvider>
  );
}
export default App;
