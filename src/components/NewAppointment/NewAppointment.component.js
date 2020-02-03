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
                                                            <option value="Dr. Funny Guy">Dr. Funny Guy</option>
                                                            <option value="Dr. Kevorkian">Dr. Kevorkian</option>
                                                            <option value="Dr. Smart Guy">Dr. Smart Guy</option>
                                                      </select>
                                                </div>
                                                <div>
                                                      <label>Choose a Service Type</label>
                                                      <select>
                                                            <option value="Grooming">Grooming</option>
                                                            <option value="Health Services">Health Services</option>
                                                            <option value="Pet Training">Pet Training</option>
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