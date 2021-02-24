import React from 'react'
import Styles from './HomePage.module.css'
import { MdLocationOn,MdCall,MdEmail } from 'react-icons/md';
import {Link} from 'react-router-dom'


class HomePage extends React.Component{

    render(){
        return (
            <>
            <div style ={{backgroundColor : "whitesmoke"}}>
                <div className={`my-3 position-relative ${Styles.profile_container}`}>
                    <img src="profile.jpg" alt="profile"></img>
                    {/* <div className={`position-absolute ${Styles.decorative_circle}`}></div> */}
                </div>

                <div className={Styles.name}>
                    Safal Singh Gaur
                </div>

                <div className={Styles.profession}>
                    Full Stack Developer
                </div>
                <br></br>
                
                <div>
                    <Link to={{pathname:"https://www.linkedin.com/in/safalgaur/"}} target="_blank">
                        <img src="linkedin.png" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                    <Link to={{pathname:"https://twitter.com/safalsinghgaur"}} target="_blank">
                        <img src="twitter.png" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                    <Link to={{pathname:"https://github.com/Gaursafal"}} target="_blank">
                        <img src="github.svg" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                </div>


                <div className={`row m-4 ${Styles.details}`}>
                    <div className="col-sm-12 col-lg-4">
                        <MdLocationOn size="40px" color="black"/>
                        <br></br>
                       Kanpur,India
                    </div>

                    <div className="col-sm-12 col-lg-4">
                       <MdCall size="40px" color="black"/> 
                       <br></br>
                      +91 969 5696 9168
                    </div>

                    <div className="col-sm-12 col-lg-4">
                        <MdEmail size="40px" color="black"/> 
                        <br></br>
                       safalsinghgaur@gmail.com
                    </div>
                </div>

                <div className={`mb-5 px-5 ${Styles.details}`}>
                    A passionate aspiring Full Stack Developer skilled in MERN stack.
                    Actively ready to join in a great
                    lively team in a good start-up environment and give my best.
                    <br/>
                    <button style = {{border : "none"}}>
                    <i><Link style = {{color : "black", textDecoration : "none"}} to={{pathname:"https://drive.google.com/file/d/1zyHKkD6vNDET7P_vo4GwaFVSJY_Rbzb-/view?usp=sharing"}} target="_blank">Resume</Link></i>
                    </button>
                </div>

                <div className={ `container ${Styles.skills}`}>
                    <img src="html-5.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="css.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="js.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="react.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="redux.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="bootstrap.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="express.png" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="mongo.png" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
                    <img src="github.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
                </div>
                
                <br></br>
                <br></br>
                <br></br>
            </div>
            </>
        )
    }
}

export default HomePage