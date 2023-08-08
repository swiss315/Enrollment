import React, { useState } from "react";
import { ReactComponent as Logo } from "./Assets/logo.svg";
import { ReactComponent as FormLogo } from "./Assets/Forms-amico.svg";
import PopUp from './modal'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

// export default BasicExample;

function Enrollment() {
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading]= useState(null)
    const [error, setError] =  useState(null)
    const [data, setData] = useState({
        "surname": "",
        "firstname": "",
        "middlename": "",
        "gender": "",
        "dob": "",
        "phone": "",
        "email": "",
        "plan": "",
        "plan_type": "",
        "enrollment_date": "",
        "status": "",
        "relationship": "",
        "primary_hospital": "",
        "secondary_hospital": "",
        "pre_existing_condition": "",
        "address": ""
    })

    console.log(data);

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const create = (data) => {
        setIsLoading(true)
        axios.post(`https://stage.paddycover.com/v1/axa/enrollment`, data,
        {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            console.log(res);
            setIsLoading(false)
            setShow(true)
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
            // console.log(err.response.data.message);
        })
    }

    const form = document.getElementById("form-group")

    const clearform = () => {
        setShow(false);
        form.reset();
    }

    const click = (e) => {
        e.preventDefault();
        create(data)
    }
    return (
        <div className="form-container">
            <div className="d-flex justify-content-between">
                <Logo />
                {/* <button className="button">Contact Us</button> */}
            </div>
            <div className=" justify-content-between split">
                <div className="enroll-image">
                    <FormLogo />
                </div>
                <div className="enroll-form">
                    <h3 className="text-center enrol-header">ENROLLMENT</h3>
                    <form id="form-group" className="form-group"  onSubmit={click}>
                        <div className="input-group">
                            <div>
                                <label>Surname</label>
                                <input type="text" name="surname" onChange={onChange} required/>
                            </div>
                            <div>
                                <label>First Name</label>
                                <input type="text" name="firstname" onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Middle Name</label>
                                <input type="text" name="middlename" onChange={onChange} required/>
                            </div>
                            <div>
                                <label>Gender</label>
                                <select name="gender" onChange={onChange} required>
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Date Of Birth</label>
                                <input type="date" name="dob" onChange={onChange} required/>
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="tel" name="phone" onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Email</label>
                                <input type="email" name="email" onChange={onChange} required/>
                            </div>
                            <div>
                                <label>Plan</label>
                                <input type="text" name="plan" onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Plan Type</label>
                                <select name="plan_type" onChange={onChange} required>
                                    <option>Select Plan</option>
                                    <option>Individual</option>
                                    <option>Family</option>
                                </select>
                            </div>
                            <div>
                                <label>Enrollment Date</label>
                                <input type="date" name="enrollment_date" onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Status (member/dependent)</label>
                                <input type="text" name="status" onChange={onChange} required/>
                            </div>
                            <div>
                                <label>Relationship (husband/wife/son/daughter)</label>
                                <input type="text" name="relationship" onChange={onChange} required />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Primary Hospital</label>
                                <input type="text" name="primary_hospital" onChange={onChange} required/>
                            </div>
                            <div>
                                <label>Secondary Hospital</label>
                                <input type="text" name="secondary_hospital" onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label>Pre-Existing Condition</label>
                                <textarea rows={2} name="pre_existing_condition" onChange={onChange} required/>
                            </div>
                            <div>
                                <label>Address</label>
                                <textarea rows={2} name="address" onChange={onChange} required/>
                            </div>
                        </div>
                        <p>{error}</p>
                        <div className="text-center">
                            <button className="create-button" >
                                {isLoading ? <BasicExample/> : 'Create'}
                            </button>
                        </div>
                        <PopUp show={show} onHide={clearform} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Enrollment;
