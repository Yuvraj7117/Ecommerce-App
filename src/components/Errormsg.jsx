import React from 'react';
import { Alert } from 'react-bootstrap';

const Errormsg = ({variant,children}) => {
  return (
    <>
    <Alert variant={variant}>
    
    {children}
  </Alert>
    </>
  )
}

export default Errormsg