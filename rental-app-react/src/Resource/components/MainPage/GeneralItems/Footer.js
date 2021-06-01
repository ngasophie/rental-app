import React, {Component} from 'react';
class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer className="footer">
            <div className="container">
                <div className="about-us"data-aos="flip-right">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus mollitia exercitationem, odio explicabo maxime placeat culpa quam! Consequatur quibusdam inventore dolor error quidem minus eveniet distinctio blanditiis doloremque unde?</p>
                </div>
                <div className="newsletter"data-aos="flip-left">
                    <h2>Newsletter</h2>
                    <div className="form-element">
                        <input type="text" placeholder="Email"/>
                        <span><i className="fas fa-chevron-right" aria-hidden="true"></i></span>
                    </div>
                    <p>stay update</p>
                </div>
                <div className="instagram"data-aos="flip-right">
                    <h2>Instagram</h2>
                    <div className="flex-row">
                        <img src="https://cdn.luxstay.com/rooms/27340/large/512420ef3ffcd9a280ed.jpg" alt="is"/>
                        <img src="https://cdn.luxstay.com/rooms/27340/large/512420ef3ffcd9a280ed.jpg" alt="is"/>
                        <img src="https://cdn.luxstay.com/rooms/27340/large/512420ef3ffcd9a280ed.jpg" alt="is"/>
                    </div>
                    <div className="flex-row">
                        <img src="https://cdn.luxstay.com/rooms/27340/large/512420ef3ffcd9a280ed.jpg" alt="is"/>
                        <img src="https://cdn.luxstay.com/rooms/27340/large/512420ef3ffcd9a280ed.jpg" alt="is"/>
                        <img src="https://cdn.luxstay.com/rooms/27340/large/512420ef3ffcd9a280ed.jpg" alt="is"/>
                    </div>
                </div>
                <div className="follow"data-aos="flip-left">
                    <h2>Follow us</h2>
                    <p>let us be social</p>
                    <div>
                        <i className="fab fa-facebook"data-aos="fade-down-left"></i>
                        <i className="fab fa-instagram"data-aos="fade-down-left"></i>
                        <i className="fab fa-twitter"data-aos="fade-down-left"></i>
                        <i className="fab fa-youtube"data-aos="fade-down-left"></i>
                    </div>
                </div>
            </div>
            <div className="rights flex-row">
                <h4 className="text-gray">Coppy right bt Nga Trinh</h4>
            </div>
            <div className="move-up">
                <span>
                    <i className="fas fa-arrow-circle-up fa-2x"></i>
                </span>
            </div>
        </footer>
        )
    }
}
export default Footer;