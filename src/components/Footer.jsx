import React from 'react';  

const Footer = () => {  
    return (  
        <section className="footer-section">  
            <div className="footer-section-title">  
                Got questions? We’re happy to answer every single one of them.  
            </div>  
            <div className="footer-content">  
                <div className="footer-items">  
                    <div className="footer-item-title">Email</div>  
                    <div className="footer-item-content" style={{ color: '#3689fb' }}>  
                        <a href="mailto:creators@hypd.in">creators@hypd.in</a>  
                    </div>  
                </div>  
                <div className="footer-items">  
                    <div className="footer-item-title">Website</div>  
                    <div className="footer-item-content" style={{ color: '#3689fb' }}>  
                        <a href="https://www.hypd.store" target="_blank" rel="noopener noreferrer">  
                            https://www.hypd.store/  
                        </a>  
                    </div>  
                    </div> 
                </div>  
                <div className="onboard-hypd-btn" style={{ margin: '40px' }}>  
                    <div className="footer-item-title">Are you a brand?</div>  
                    <div className="footer-item-content" >  
                        <button className="btn-2">  
                            Join HYPD.  
                        </button>  
                    </div>  
                </div>  
          
            <div className="social-bar">  
                <a href="https://www.facebook.com/hypdstore/" target="_blank" rel="noopener noreferrer">  
                    <img src="https://www.hypd.store/_nuxt/04-facebook.4313ac81.svg" alt="Facebook" />  
                </a>  
                <a href="https://twitter.com/get_hypd" target="_blank" rel="noopener noreferrer">  
                    <img src="https://www.hypd.store/_nuxt/03-twitter.b1387c42.svg" alt="Twitter" />  
                </a>  
                <a href="https://www.linkedin.com/company/hypdin/" target="_blank" rel="noopener noreferrer">  
                    <img src="https://www.hypd.store/_nuxt/02-linkedin.a8dc94f9.svg" alt="LinkedIn" />  
                </a>  
                <a href="https://www.instagram.com/gethypd/" target="_blank" rel="noopener noreferrer">  
                    <img src="https://www.hypd.store/_nuxt/01-instagram.d9a90f61.svg" alt="Instagram" />  
                </a>  
                <a href="https://www.youtube.com/channel/UCNLrrzAIuAKk8MPuBF7H4jQ" target="_blank" rel="noopener noreferrer">  
                    <img src="https://www.hypd.store/_nuxt/05-youtube.d1715efc.svg" alt="YouTube" />  
                </a>  
            </div>  
            <div style={{ fontFamily: 'Urbanist-Light', color: '#adb4c7', margin: '0 auto', textAlign: 'center', fontSize: '14px', padding: '0 0 16px 0' }}>  
                HYPD - © 2023. All Rights Reserved.  
            </div>  
        </section>  
    );  
};  

export default Footer;