import React,{useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
function MobileModal(props) {
    const [show, setShow] = useState(false);
    //const handleClose = () => props.closeClicked();
    const handleShow = () => setShow(true);
  const goToLoginPage=()=>{

  }
    return (
      <>
        
        <Modal show={props.show } onHide={props.closeClicked}>
        <Modal.Header closeButton>
          <Modal.Title>Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Order is placed with id {Math.floor(Math.random()*10000)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeClicked}>
            Close
          </Button>
         
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MobileModal;