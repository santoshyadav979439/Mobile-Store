import React,{useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
function MobileModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => props.closeClicked();
    const handleShow = () => setShow(true);
  const goToLoginPage=()=>{

  }
    return (
      <>
        
        <Modal show={props.show } onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Login to Place Order</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        <Link to="/login"><Button variant="primary">  Login
          </Button></Link>  
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MobileModal;