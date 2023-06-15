import { Link } from "react-router-dom";

export default function ImproveSkills(){
    
    const list = [
      "Learn new recepies",
      "Experiment with food",
      "Write your own recepies",
      "Know mutrition tips",
      "Get cooking tips",
      "Get ranked"
    ]
    return(
      <div className="section improve-skills">
        <div className="col img">
          <div className ="imgimg">
            <img src="/img/galary/img10.jpg" alt=""/>
          </div>
        </div>
        <div className="col typo">
          <h1 clssName="title">Improve your Culinary Skills</h1>
          {list.map((item, index) =>(
            <p className="Skill-items" key={index}>{item}</p>
          ))}
          <button className="btn"><Link to="/recipie"className="btn2">Explore Now</Link></button>
        </div> 
      </div>
    )
}