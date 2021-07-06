import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, hobby, eyeColor }) {
  const [weight, setWeight] = useState(1)

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.name === "-" && weight > 0) {
      setWeight(weight - 1)
    } else if (e.target.name === "-" && weight === 0) {
      alert("Can't have negative weight, silly!")
    } else {
      setWeight(weight + 1)
    }
  }

function babyImage(eyeColor) { 
 if(eyeColor==="blue") {
   return BlueBaby }
   else if (eyeColor==="sun"){
     return SunBaby}
     else if (eyeColor==="glowing"){
       return GlowingBaby} 
       else{
         return normalBaby
       }
     }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight} {weight === 1 ? "ton" : "tons"}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={babyImage(eyeColor)}
          style={{ height: `${weight}00px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
  }

export default BabyHog;
