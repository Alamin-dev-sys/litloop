import React from 'react';
import SliderIndicatorsControlsInside from './Slider';
import SideMenu from './SideMenu';

const Banner = ({image}) => {
    return (
        <section className=''>
        <div className="container overflow-hidden mx-auto ">
          <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-3">
                <SideMenu product={image}/>
            </div>
            <div className="col-span-4 lg:col-span-9">
                <SliderIndicatorsControlsInside image={image}/>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;