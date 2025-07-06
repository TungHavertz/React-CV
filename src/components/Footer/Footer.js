import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div id='footer' className='d-flex flex-column justify-content-around footer-bg'>
        <div className='d-flex justify-content-center'>
            <a href='https://github.com/TungHavertz' class="fa-brands fa-github footer-icon pe-2 text-decoration-none"></a>
            <a href='https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin' class="fa-brands fa-linkedin-in footer-icon text-decoration-none"></a>
        </div>
        <div className='d-flex justify-content-center'>
          <h1 className='thank'> 
            Thank you for taking the time to review my portfolio!!!</h1>
        </div>
        <h4 className='d-flex justify-content-center '>
            <a className='text-decoration-none text-light' href="mailto:tunganhpham2704@gmail.com">tunganhpham2704@gmail.com</a>
        </h4>
    </div>
  )
}

export default Footer