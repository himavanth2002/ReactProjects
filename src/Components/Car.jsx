export function Car(props){
    return<p onClick={()=>{
    props.onCarClick(2)}}>I am the {"<car/>"}</p>
}