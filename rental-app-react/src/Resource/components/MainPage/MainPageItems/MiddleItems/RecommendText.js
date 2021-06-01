import React, {Component} from 'react';
class RecommendText extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div  data-aos="fade-up" className="recommend">
                <div  className="recommend-text">
                    <h2  data-aos="fade-up">Recommended for you</h2>
                    <h5  data-aos="fade-up">Now begin find the accomodate</h5>
                    <p  data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore ipsum labore non, repudiandae dicta dolor quam harum hic sapiente obcaecati, in maiores ullam atque itaque autem corporis porro rem.</p>
                </div>
            </div>
         )
    }
}
export default RecommendText;