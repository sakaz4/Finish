import styles from './FeedBack.module.css';
import React, { useState } from 'react';

import { Button, Form, Modal } from 'react-bootstrap';

const FeedBack = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <div>
   
    <div className={styles.modalWrapper}>
        <Modal show={show} onHide={handleClose} animation={false}>
        <h3 className={styles.title}>Point of psychological assistance</h3>
        
            <Modal.Body>
                <Form action="send.php" method="post">
                    <Form.Group className={styles.mb3} controlId="exampleForm.ControlInput1">
                        <Form.Label>your name *</Form.Label>
                        <Form.Control type="text" name="name" placeholder="write your name" required/>
                    </Form.Group>
                    <Form.Group className={styles.mb3} controlId="exampleForm.ControlInput1">
                        <Form.Label>e mail</Form.Label>
                        <Form.Control type="text" name="email" placeholder="name@example.com" required/>
                    </Form.Group>
                    <Form.Group className={styles.mb3} controlId="exampleForm.ControlInput1">
                        <Form.Label>phone number</Form.Label>
                        <Form.Control type="text" name="phone" placeholder="+7999 999 99 99" />
                    </Form.Group>
                    <Form.Group className={styles.textPanel} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>message *</Form.Label>
                        <Form.Control as="textarea" name="masege" rows={2} required/>
                    </Form.Group>
                    <Form.Group className={styles.mb4} controlId="formBasicCheckbox">
                        <input className={styles.checkBox} type="checkbox" id="check" name="check" required/>
                        <label for="check">approval of the introduction of the 5G chip *</label>
                    </Form.Group>
                </Form>
            </Modal.Body>
            
                <div className={styles.btnWrapperBottom}>
                    <Button variant="secondary" onClick={handleClose}>close</Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>send</Button>
                </div>
            
        </Modal>

        <div className={styles.btnOpen}><Button  className={styles.mr2} onClick={handleShow}>Receiving complaints</Button></div>
        </div>
    </div>
)
}

export default FeedBack;