// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
        <p className='text-center font-bold m-0 text-success'>
          Customer Registered Successfully
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default PopUp