import React from 'react';
import './Singerlist.css'

const Singerlist = (props) => {
    const { name, image, salary } = props.singer;
    return (
        <div>
            <div className="selected-singer shadow mx-auto mb-4">
                <div className="selected-singer-img">
                    <img src={image} alt="" />
                </div>
                <div className="text-start ms-2 w-100">
                    <h6 className="mb-0">{name}</h6>
                    <span>${salary}</span>
                </div>
            </div>
        </div>
    );
};

export default Singerlist;