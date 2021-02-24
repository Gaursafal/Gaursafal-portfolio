import React from 'react'
import Styles from './Projects.module.css'

class Projects extends React.Component{
    render() {
        return (
           
            <div className={Styles.main_container}>
                <h1 className ={Styles.heading}>Projects at Glance</h1>
                <br></br>
                <div className="container-fluid">
                <div className="row justify-content-center">

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="SpecialIssue.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">VentureBeat Clone</h5>
                            <p className="card-text">A leading source for transformative tech news and events that provide the deep context to make smart decisions.</p>
                            <div className="mt-auto">
                            <a href="https://github.com/Gaursafal/VentureBeat-Clone" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/VentureBeat-Clone" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>    

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="milap.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Milap Clone</h5>
                            <p className="card-text">Crowdfunding platform related to healthcare, education, sports, disaster relief, and other personal causes</p>
                            <div className="mt-auto">
                            <a href="https://github.com/Gaursafal/Milaap-Clone-React" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Milaap-Clone-React" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>    

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="todo.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Todiost Clone</h5>
                            <p className="card-text">Todoist an app that helps millions of people organize work and life now has grown from a personal side project to a market-leading Swiss Army Knife of life organization. </p>
                            <div className="mt-auto">
                            <a href="https://gaursafal.github.io/Todoist-Clone/" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Todoist-Clone" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>    
                </div>

                <br></br>
                <div className="row justify-content-center"> 

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="person.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Person's Card</h5>
                            <p className="card-text">A website using technical tools through which a person add, edit and delete the details of a person.</p>
                            <div className="mt-auto">
                            <a href="https://github.com/Gaursafal/Persons-Card" className="btn btn-success  btn-block">Live</a>
                            <a href="https://github.com/Gaursafal/Persons-Card" className="btn btn-outline-dark  btn-block">Github link</a>
                            </div >
                        </div>
                    </div>    

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" >
                        <img src="covid.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Covid-19 Tracker</h5>
                            <p className="card-text">Website to display current covid-19 cases across the world including total confirmed, active cases, recovered cases, and death toll.</p>
                            <div className="mt-auto">
                            <a href="https://gaursafal.github.io/Masai-Sprint-3/" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Covid-19-Tracker" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>

                </div>

                </div>  
            </div>
        )
    }
}
export default Projects