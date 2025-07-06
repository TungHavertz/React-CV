import React from 'react'
import useFadeIn from '../../hooks/useFadeIn.js';

import styles from './intro.css';
import '../../styles/animations.css';

function Intro() {
    const fadeLeftRef = useFadeIn({ threshold: 150 }); // Ref cho div bên trái
    const fadeRightRef = useFadeIn({ threshold: 150 }); 

    return (
        <div id='intro' className='intro-bg d-flex justify-content-center p-5 '>
            <div className=' bg-white w-75 d-flex flex-column align-items-start rounded-4'>
                <div className='d-flex justify-content-around w-100 h-100 pt-5'>
                    <div ref={fadeLeftRef} className='fade-in-left d-flex flex-column align-items-start mt-4 pt-3'>
                        <h1>Introduction</h1>
                        <h4>Name: Pham Tung Anh</h4>
                        <div className='d-flex'>
                            <h4>Email:</h4>
                            <h4>
                                <a href="mailto:tunganhpham2704@gmail.com" className='text-decoration-none ms-1'>tunganhpham2704@gmail.com</a>
                            </h4>
                        </div>
                        <div className='d-flex'>
                            <h4>Phone:</h4>
                            <h4>
                                <a href="tell:+0344956830" className='text-decoration-none ms-1'>0344956830</a>
                            </h4>
                        </div>
                    </div>  
                    <div ref={fadeRightRef} className='fade-in-right intro-img'></div>
                </div>
            </div>
        </div>
    )
}

export default Intro