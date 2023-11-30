//?=== IMPORT HOME CSS FILE ===?//
import "./index.css";
import { useRef } from "react";
import Layout from "../../layout";
import home__image from "../../assets/home__image.jpg";
import { animated } from "react-spring";
import logo from "../../assets/logo.png";
import { use3dEffect } from 'use-3d-effect';

export default function Home() {
  const ref = useRef<null>(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
    <Layout>
      <section id="home" className="home">
        <div className="home__main">
          <div className="info">
            <h1>Salom</h1>
          </div>
          <div className="images__wrapper">
            <animated.div
              ref={ref}
              style={{
                ...style,
              }}
              {...mouseHandlers}
            >
              <img src={home__image} alt="Certificate" />
            </animated.div>
          </div> 
         </div>
        
      </section>
      <div className='logos'>
        <div className="logos-slide">
         <img src={logo} alt="logo"  />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo"  />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo"  />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo"  />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo"  />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo"  />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo"  />
         <img src={logo} alt="logo" />
         <img src={logo} alt="logo" />
        </div>
        </div>
    </Layout>
  );
}