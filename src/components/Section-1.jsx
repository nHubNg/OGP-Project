import React from 'react';

const Section1 = () => {
  return (
    <>
      <section>
        <div className='container-mask'>
          <div className='one-card'>
            <div className='one-img'>
              <img src="../images/ogp-logo-2.png" alt="" style={{ width: '50px' }}/>
            </div>
            <div className='one-text'>
              <h4>Open Government Partnership</h4>
              <p>The Open Government Partnership is a multilateral initiative that promote open government to strengthen governance</p>
              <button className='one-btn'>READ MORE</button>
            </div>
          </div>

          <div className='one-card' style={{backgroundColor: '#003B49', color: '#fff'}}>
            <div className='one-img'>
              <img src="../images/plateau-logo.png" alt="" style={{ width: '50px' }} />
            </div>
            <div className='one-text'>
              <h4>Plateau State Government</h4>
              <p>Plateau State is the twelfth largest state of Nigeria, and is roughly located in the center of the country</p>
              <button className='one-btn-2'>READ MORE</button>
            </div>
          </div>
        </div>

        <div>
           
        </div>
      </section>

    </>
  );
};

export default Section1;
