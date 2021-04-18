import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Header = () => {
   const [state, toggle] = useState(false);
   const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 1000 },
   });
   const styles = {
      topBanner: {
         backgroundImage: `url(https://i.ibb.co/RDcBtjm/view-from-business-startup-teamwork-concept-startup-partners-sitting-coworking-space-talking-about-f.jpg)`,
         height: '80vh',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
      },
      topText: {
         height: '100%',
         width: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.60)',
      },
   };

   return (
      <div>
         <div style={styles.topBanner}>
            <div style={styles.topText}>
               <div className=" text-center" style={{ paddingTop: '30vh' }}>
                  <h1
                     style={{
                        'font-family': 'Satisfy',
                        fontWeight: '300',
                        fontSize: '70px',
                        color: 'whitesmoke',
                     }}
                  >
                     Financial Advices for Success
                  </h1>
                  <h5
                     className="text-white"
                     style={{
                        'font-family': 'Dancing Script',
                        fontWeight: '700',
                        fontSize: '30px',
                     }}
                  >
                     Welcome to TAX
                     <span className="text-warning fw-bold">ADVISER</span>
                  </h5>

                  <button onClick={() => toggle(!state)}>
                     <animated.div
                        style={{
                           opacity: x.interpolate({
                              range: [0, 5],
                              output: [0.3, 1],
                           }),
                           transform: x
                              .interpolate({
                                 range: [
                                    0,
                                    0.25,
                                    0.35,
                                    0.45,
                                    0.55,
                                    0.65,
                                    0.75,
                                    1,
                                 ],
                                 output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                              })
                              .interpolate(x => `scale(${x})`),
                        }}
                     >
                        View Details
                     </animated.div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
