import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Singer.css';

const FBicon = <FontAwesomeIcon icon={faFacebookSquare} />
const Instaicon = <FontAwesomeIcon icon={faInstagram} />
const Carticon = <FontAwesomeIcon icon={faCartArrowDown} />

const Singer = (props) => {
    const { name, age, gender, salary, image } = props.singer;
    const { facebook, instagram } = props.singer.social;
    // console.log(props.singer.social);
    return (
        <div className="border d-flex flex-column each-singer">
            <div className="d-flex flex-column p-3">
                <div className="d-flex">
                    <div className="img-section">
                        <div className="img-container">
                            <img className="img-fluid" src={image} alt="taylor-swift" />
                        </div>
                        <button onClick={() => props.hireSingerHandler(props.singer)} className="hire-btn">{Carticon} Hire</button>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>: {name}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>: {gender}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>: {age}</td>
                                </tr>
                                <tr>
                                    <th>Salary</th>
                                    <td>: ${salary}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-start pb-1">
                            <span className="social-icon">&nbsp;<a target="_blank" rel="noreferrer" href={facebook}>{FBicon}</a>&nbsp;&nbsp;<a target="_blank" rel="noreferrer" href={instagram}>{Instaicon}</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;