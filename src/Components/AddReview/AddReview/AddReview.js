import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddReview = () => {
   const [image, setImage] = useState(null);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = e => {
      const data = { ...e, imageURL: image };

      fetch('https://secret-shelf-74335.herokuapp.com/addReviews', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ data }),
      });
      window.location.reload();
   };

   const imageUpload = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.set('key', '1be513e26caa61a1ce047059c32aa318');
      formData.append('image', e.target.files[0]);
      axios
         .post('https://api.imgbb.com/1/upload', formData)
         .then(res => {
            console.log(res.data.data.display_url);
            setImage(res.data.data.display_url);
         })
         .catch(error => {
            console.log(error);
         });
   };

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar />
            </div>

            <div className="col-md-9 mt-2">
               <h5>GET FREE QUOTE </h5>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="form-label">Name:</label>
                  {errors.name && <span>This field is required</span>}
                  <input
                     {...register('name', { required: true })}
                     id="name"
                     className="form-control"
                  />
                  <label className="form-label">Email:</label>
                  <input
                     {...register('email')}
                     id="email"
                     className="form-control"
                  />
                  <label className="form-label">Your review:</label>
                  <textarea
                     {...register('review', { required: true })}
                     className="form-control"
                     rows="4"
                     id="comments"
                  ></textarea>{' '}
                  {errors.review && <span>This field is required</span>}
                  <br />
                  <input type="file" onChange={imageUpload} className="mb-1" />
                  <br />
                  <input type="submit" />
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddReview;
