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
      fetch('https://desolate-river-56965.herokuapp.com/addServices', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      // window.location.reload();
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
                     <label className="form-label">Price:</label>
                     {errors.price && <span>This field is required</span>}
                     <input
                        {...register('price', { required: true })}
                        className="form-control"
                     />
                     <br />
                     <button className="btn btn-success" type="submit">
                        Add Service
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AddService;
