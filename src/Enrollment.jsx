import React, { useState } from "react";
import { ReactComponent as Logo } from "./Assets/logo.svg";
import { ReactComponent as FormLogo } from "./Assets/Forms-amico.svg";
import PopUp from './modal'

function Enrollment() {
    const [show, setShow] = useState(false)
    return (
        <div className="form-container">
            <div className="d-flex justify-content-between">
                <Logo />
                {/* <button className="button">Contact Us</button> */}
            </div>
            <div className="d-flex justify-content-between d-md-block">
                <div className="enroll-image">
                    <FormLogo />
                </div>
                <div className="enroll-form">
                    <h3 className="text-center enrol-header">ENROLLMENT</h3>
                    <form className="form-group">
                        <div className="input-group">
                            <div>
                                <label>Surname</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Middle Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Gender</label>
                                <select>
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Date Of Birth</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="tel" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            <div>
                                <label>Plan</label>
                                <select>
                                    <option>Select Plan</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Plan Type</label>
                                <select>
                                    <option>Select Plan</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div>
                                <label>Enrollment Date</label>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Status (member/dependent)</label>
                                <select>
                                    <option>Select Status</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div>
                                <label>Relationship (husband/wife/son/daughter)</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Primary Hospital</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Secondary Hospital</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Pre-Existing Condition</label>
                                <textarea rows={2} />
                            </div>
                            <div>
                                <label>Address</label>
                                <textarea rows={2} />
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="create-button" onClick={(e) => {e.preventDefault(); setShow(true)}}>
                                Create
                            </button>
                        </div>
                        <PopUp show={show} onHide={() => setShow(false)} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Enrollment;
