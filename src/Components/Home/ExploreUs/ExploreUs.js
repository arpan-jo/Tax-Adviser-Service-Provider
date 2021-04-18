import React from 'react';

const ExploreUs = () => {
   return (
      <section className="featured-services pb-md-5 mt-5">
         <div className="container">
            <div className="row align-items-center">
               <h5 className="my-4 text-center">EXPLORE US</h5>
               <div className="col-md-6 background">
                  <div className="d-flex">
                     <div className="ml-4">
                        <img
                           style={{ width: '60px' }}
                           className="image-sizing icon"
                           src={`https://i.ibb.co/w60DKFV/consulting.png`}
                           alt=""
                        />
                     </div>
                     <div className="px-2">
                        <h5>The Outer Space Treaty</h5>
                        <p className="text-secondary">
                           Hearts of The Outer Space Treaty is waiting to be
                           known corpus callosum rich in mystery two ghostly
                           white figures in coveralls and helmets are small.
                        </p>
                     </div>
                  </div>
                  <div className="d-flex">
                     <div>
                        <img
                           style={{ width: '60px' }}
                           src={`https://i.ibb.co/X53zsL6/counselor.png`}
                           alt=""
                        />
                     </div>
                     <div className="px-2">
                        <h5>The most luminous star</h5>
                        <p className="text-secondary">
                           Star stuff The most luminous star energy hidden in
                           matter a mote of dust suspended in a sunbeam bits of
                           moving fluff another world brain is the seed.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <img
                     style={{ width: '700px', height: '380px' }}
                     className="img-fluid"
                     src={
                        'https://salaetadvocats.com/wp-content/uploads/2017/05/extra_5_en_off.jpg'
                     }
                     alt=""
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default ExploreUs;
