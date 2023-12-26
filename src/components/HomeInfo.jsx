import { Link } from "react-router-dom"
import {arrow} from '../assets/icons'
function HomeInfo({currentStage}) {

  
  function InfoBox({text,link,btnText}){
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          {text}
        </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
          {btnText}
          <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>

      </div>
    )
  }


  const renderContent={
    1:(<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
       Hi, I am <span className="font-semibold">Vijay Kumar</span><br/>
       A front end Developer from India
      </h1>),
   2: (
    <InfoBox text="Gained practical skills through hands-on projects during my learning journey." link="/about" btnText="learn more"/>
   ),

   3: (
    <InfoBox text="Turning Ideas into Web Excellence: Explore My Front-End Projects." link="/projects" btnText="visit my portfolio"/>
   ),

   4: (
    <InfoBox text="Need a project done or looking for front end dev? I'm just a few keystrokes away"  link="/contact" btnText="let's talk"/>
   ),

    
  }
  return (
    renderContent[currentStage]
  )
}

export default HomeInfo
