import './Section2.css'
import Yogurt from './assets/yogurt.jpg';

let head = {
    fontSize:"1.2rem",
    paddingBottom:"1rem"
}

function Section2(){

    return(
        <section className="Content-Container">

        <div className='container'>
            <h3 style={head}>NEW PRODUCT</h3>
            <h2 className='heading'>The Twist of Healthy Yogurt</h2>
            <p className='para'>This website template has been designed by freewesitetemplates.com for you, for free. You can replace all this text with your own text.</p>
        </div>

        <div className = "image-container">
            <img src={Yogurt} alt="" className='img1'></img>
        </div>


        </section>

    )
}

export default Section2;
