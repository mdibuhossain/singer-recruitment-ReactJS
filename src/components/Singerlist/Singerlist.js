import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Singerlist.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CancleBtn = <FontAwesomeIcon icon={faTimes} />;

const Singerlist = (props) => {
    const { _id, name, image, salary } = props.singer;
    const { removeHandler } = props;
    return (
        <div>
            <div className="selected-singer shadow mx-auto w-auto mb-4">
                <div className="selected-singer-img">
                    <img src={image} alt="" />
                </div>
                <div className="text-start ms-2 w-100">
                    <h6 className="mb-0">{name}</h6>
                    <span>${salary}</span>
                </div>
                <div className="h-100">
                    <button onClick={() => removeHandler(_id)} type="button" className="border-0 px-3 btn-primary h-100 rounded-start-0">
                        {CancleBtn}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Singerlist;