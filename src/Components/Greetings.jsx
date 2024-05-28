export function Greetings(props){
    console.log(props)
    return <div><h1>HI {props.firstName} {props.lastName} your age is {props.age}
    fav player is {props.children}</h1>
    </div>

}