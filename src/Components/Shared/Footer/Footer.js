import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
   faFacebook,
   faGoogle,
   faTwitter,
   faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   return (
      <section>
         <div>
            <div className=" bg-dark mt-4">
               <div className="container ">
                  <div className="row">
                     <div className="col-md-4 mt-4 mb-3">
                        <h5 className="mt-2 text-white">ABOUT US</h5>
                        <small className="text-secondary">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Optio enim aut suscipit corporis, inventore
                           sint non explicabo fugiat sapiente quae?
                        </small>
                        <br />
                        <small className="text-secondary">
                           <FontAwesomeIcon icon={faHome} /> 545, Great Lane,
                           New York, US
                        </small>
                        <br />
                        <small className="text-secondary">
                           <FontAwesomeIcon icon={faEnvelope} />{' '}
                           support@gmail.com
                        </small>
                        <br />
                        <small className="text-secondary">
                           <FontAwesomeIcon icon={faPhone} /> 1-1833-654-00
                        </small>
                        <br />
                        <button className="btn text-white">
                           <FontAwesomeIcon icon={faGoogle} />
                        </button>
                        <button className="btn text-white">
                           <FontAwesomeIcon icon={faFacebook} />
                        </button>
                        <button className="btn text-white">
                           <FontAwesomeIcon icon={faYoutube} />
                        </button>
                        <button className="btn text-white">
                           <FontAwesomeIcon icon={faTwitter} />
                        </button>
                     </div>
                     <div className="col-md-4 mt-4 mb-3">
                        <h5 className="text-white">OUR BLOG</h5>
                        <div className="mt-2">
                           <p className="text-white">
                              Generating Traffic Through Search
                           </p>
                           <small className="text-secondary">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Qui ipsum, id at ea quas iusto.
                           </small>
                           <br />
                           <small className="text-secondary">20-12-2040</small>
                        </div>
                        <hr className="text-white" />
                        <div>
                           <p className="text-white">
                              Today May Be Just Like Any Other Day!
                           </p>
                           <small className="text-secondary">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Sapiente reprehenderit nulla
                              fugiat commodi.
                           </small>
                           <br />
                           <small className="text-secondary">19-12-2040</small>
                        </div>
                     </div>
                     <div className="col-md-4 mt-4 mb-3">
                        <h5 className="text-white">GET FREE QUOTE</h5>
                        <input
                           type="text"
                           id="email"
                           name="email"
                           placeholder="Name"
                        />
                        <input
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Email"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
