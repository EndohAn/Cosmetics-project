import { useState } from "react";
import { dataSlider } from "./data";
import './App.css';

function Slider() {
    const [person, setPerson] = useState(0);
    const {id, name, image} = dataSlider[person];
    // console.log([person])

    const perviousPerson = () => {
        setPerson((person => {
            person --;
            if (person < 0) {
                return dataSlider.length-1;
            }
            return person;
        }))
    }

    const nextPerson = () => {
        setPerson((person => {
            person++;
            if (person > dataSlider.length -1){
                person = 0
            }
            return person;
        }
            ))
    }

    return(<div>
        <div className="container">
        <h2 className="title">
          Bestsellery </h2>
        </div>
        <div className="container">
        <img src={image} width="300px" alt="person"/>
        </div>

        <div className="container">
        <h3> {name}</h3>
        </div>
             
        <div className="btn container">
        <button onClick={perviousPerson}>Previous</button>
        <button onClick={nextPerson}>Next</button>
        </div>
    </div>)
}
export default Slider;
