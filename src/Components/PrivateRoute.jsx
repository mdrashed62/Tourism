import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} =useContext(AuthContext)
    const location = useLocation();
   
    if(loading){
            return <div className='flex  justify-center mt-5 mb-5'><progress className="progress w-56"></progress></div>
        }
        
          if (user) {
            return children;
          }
          
    
        return <Navigate state={location.pathname} to="/login" replace></Navigate>
   
};


PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};


export default PrivateRoute;