import './App.css'
const IdCard = (props) => (
    <div>
        <img src={props.picture} alt="Profile"  width="100"/>
        <p>Name: {props.firstName} {props.lastName}</p>
        <p>Gender: {props.gender} </p>
        <p>Height: {props.height} cm</p>
        <p>Birtth: {new Date(props.birth).toLocaleDateString()}</p>

    </div>
);
export default IdCard;