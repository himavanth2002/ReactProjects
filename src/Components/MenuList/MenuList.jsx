import { MenuListItem } from '../MenuListItem/MenuListItem'
import s from './style.module.css'
import { Difficulty } from './Constants';
export const MenuList=(props)=>{
    return (<div className={s.container}>
        {
            Difficulty.map((difficulty)=>{
                return(
                    <MenuListItem 
                isSelected={props.difficulty===difficulty}
                onClick={props.onItemClick}
                difficulty={difficulty}/>
                    
                )
            })
        }
        {/* <MenuListItem 
        isSelected={props.difficulty==="medium"}
        onClick={props.onItemClick}
        difficulty="medium"/>
        <MenuListItem
        isSelected={props.difficulty==="high"}
        onClick={props.onItemClick}
         difficulty="high"/>         */}
    </div>);
}