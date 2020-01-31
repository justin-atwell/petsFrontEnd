import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import './NewAppointment.css';

function NewAppointment () {
const [show, setShow] = useState(false);

const handleClose = () => { setShow (false);}
const handleShow = () => { setShow (true);}



            return (
                  <div>
                        <Button onClick={handleShow} className='btn'>New Appointment</Button>
                        <Modal show={show} onHide={handleClose}>
                              <Modal.Header>
                                    <Modal.Title>Appointment Scheduler</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                    <form>
                                          <div>
                                                <div>
                                                      <label>Choose a Vet </label>
                                                      <select name="Vet">
                                                            <option value="Dr. Big Nose">Dr. Big Nose</option>
                                                            <option value="Dr. Kevorkian">Dr. Kevorkian</option>
                                                            <option value="Dr. Old Guy">Dr. Old Guy</option>
                                                      </select>
                                                </div>
                                          </div>
                                    </form>
                              </Modal.Body>
                              <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                    <Button variant="primary" onClick={handleClose}>Schedule</Button>
                              </Modal.Footer>
                        </Modal>
                  </div>
                  )
}

export default NewAppointment;