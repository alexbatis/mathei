import React from 'react';
import { useSelector } from 'react-redux';


const Gallery: React.FC = () => {

    const images = useSelector( (state:any) => state.reviewReducers.images );

    return (
        <div className="images">
            {images.map((item: any) => {
                return 	<div className="one-image" key={item.id}>
                            <img className="gallery-item" src={item.image} alt="" />
                        </div>
            })}					
        </div>
    );

}

export default Gallery;