import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const LoadServices = ({ service }) => {
   //    const [email, setEmail] = useState();

   //    const history = useHistory();
   //    const deleteAdmin = anAdmin => {
   //       const { email } = anAdmin;
   //       setEmail(email);
   //       window.location.reload();
   //    };

   //    useEffect(() => {
   //         fetch('https://secret-shelf-74335.herokuapp.com/deleteService', {
   //            method: 'DELETE',
   //            headers: {
   //               'Content-Type': 'application/json',
   //            },
   //            body: JSON.stringify({ email }),
   //         });
   //    }, [email]);
   //    history.push('/adminPanel');
   return (
      <>
         <tr>
            <td>{service.title}</td>
            <td>{service.summary}</td>
            <td>{service.details}</td>
            <td>
               <button className="btn bg-warning">
                  <FontAwesomeIcon icon={faEdit} />
               </button>
               <button
                  //   onClick={() => deleteAdmin(admin)}
                  className="btn bg-danger"
               >
                  <FontAwesomeIcon icon={faTrash} />
               </button>
            </td>
         </tr>
      </>
   );
};

export default LoadServices;
