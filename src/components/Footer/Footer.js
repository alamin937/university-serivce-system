import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Bangladesh University of Business and Technology</h3>
            <div>
            Rupnagar, Mirpur-2, Dhaka-1216, Bangladesh
            <br />
Phone: 4803-6351, 4803-6352, 4803-6353
<br />
Admission Hotline Number: 01810033733
<br />
Cell: 01967169189, 01845734337, 01680050630
<br />
Email: info@bubt.edu.bd
            </div>
            <div style={{fontSize:'35px'}}>
                <span><i class="fab fa-facebook-square" style={{marginLeft:'30px'}}></i></span>
                <span><i class="fab fa-twitter" style={{marginLeft:'30px'}}></i></span>
                <span><i class="fab fa-instagram" style={{marginLeft:'30px'}}></i></span>
                <span><i class="fab fa-whatsapp" style={{marginLeft:'30px'}}></i></span>
            </div>
        </div>
    );
};

export default Footer;