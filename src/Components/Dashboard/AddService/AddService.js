import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';

const AddService = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = data => {
      fetch('https://secret-shelf-74335.herokuapp.com/addServices', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      window.location.reload();
   };

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>

            <div className="col-md-9 ">
               <div className="mx-2 p-2">
                  <h4>Add Services </h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <label className="form-label">Title:</label>
                     {errors.title && <span>This field is required</span>}
                     <input
                        {...register('title', { required: true })}
                        className="form-control"
                     />
                     <label className="form-label">Service Summary:</label>
                     <textarea
                        {...register('summary', { required: true })}
                        className="form-control"
                        rows="2"
                     ></textarea>{' '}
                     {errors.review && <span>This field is required</span>}
                     <label className="form-label">Service Details:</label>
                     <textarea
                        {...register('details', { required: true })}
                        className="form-control"
                        rows="4"
                     ></textarea>{' '}
                     {errors.review && <span>This field is required</span>}
                     <br />
                     <input type="submit" />
                  </form>
                  {/* <h3>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Eius, quae!
                  </h3>
                  <h3>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Molestias accusantium, debitis enim laudantium quia beatae,
                     id reiciendis nulla eius porro minus. Asperiores enim iure
                     corporis atque consequuntur error eligendi, dolor nesciunt,
                     ipsum architecto ex quam aperiam alias quisquam maxime rem?
                     Cupiditate enim commodi eligendi. Reprehenderit sint
                     possimus facere id quas?
                  </h3> */}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AddService;
