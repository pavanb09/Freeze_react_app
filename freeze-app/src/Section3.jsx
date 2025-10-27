import './Section3.css'
import bgImg from './assets/bg-home.jpg'
function Section3(){

    return(
        <section className="banner-section">

            <img src={bgImg} alt=""></img>
            <div className="round">
                <div className='inner-round'>
                    <h1>Freeze</h1>
                    <h1>Delight</h1>
                </div>
            </div>

        </section>

    )
}

export default Section3;