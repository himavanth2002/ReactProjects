import { useState } from "react";
import s from './style.module.css'
export const MenuListItem=(props)=>{
    const [isHovered,setIsHover]=useState(false)
    const activate=()=>{
        setIsHover(true)

    }
    const deactivate=()=>{
        setIsHover(false)
    }
    const setbackground=()=>{
        if (isHovered) {
            return "#a5e9ff";
          } else {
            if (props.isSelected) {
              return "#26baea";
            } else {
              return "#eff0ef";
            }
          }
    }
    console.log(isHovered)
    const onItemClick=()=>{
        props.onClick(props.difficulty);
    }
    return (<div 
        onClick={onItemClick}
        className={s.container}
    onMouseEnter={activate} onMouseLeave={deactivate}
    style={{backgroundColor:setbackground()}}>set to:{props.difficulty}
    </div>);

}