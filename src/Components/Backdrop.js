import "../styles/Backdrop.css";

const Backdrop = ({navStatus,clicked}) => {

   console.log(navStatus);
   return (
        navStatus ? <div className='Backdrop' onClick={clicked}></div> : null
        )
}

export default Backdrop