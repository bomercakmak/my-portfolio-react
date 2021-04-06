import "../styles/Backdrop.css";

const Backdrop = ({navStatus,clicked}) => {

   return (
        navStatus ? <div className='Backdrop' onClick={clicked}></div> : null
        )
}

export default Backdrop