import { AgeCounter } from "./AgeCounter";
import { Greetings } from "./Greetings";
import { Car } from "./Car";
import { DisplayDifficulty } from "./DisplayDifficulty/DisplayDifficulty";
import { MenuListItem } from "./MenuListItem/MenuListItem";
import { MenuList } from "./MenuList/MenuList";
import s from "./style.module.css"
import { useState } from "react";

export function App(){
    // function msg(value){
    //     alert("you clicked hello"+value)
    // }
    const [currentDifficulty,setCurrentDifficulty]=useState("");
    const onMenuListItemClick=(difficulty)=>{
        setCurrentDifficulty(difficulty);
    }
    return(
        <div>
            <h1>select your difficulty</h1>
            <div className={s.workspace}>
            <MenuList
             difficulty={currentDifficulty}
             onItemClick={onMenuListItemClick}/>
            <DisplayDifficulty difficulty={currentDifficulty}/>
            {/* <DisplayDifficulty difficulty={"Low"}/> */}
            </div>
        </div>);
        // <div>
        //     <p >I am the {"<App/"}</p>
        //     <Car onCarClick={msg}/>
        // </div>
        // // <div><h1>welcome to page</h1>
        // // <Greetings firstName={"himavanth"} lastName={"Bolla"} age={30}> favplayer is {"kohli"}</Greetings>
        // // <AgeCounter/>
        // // </div>
    
}