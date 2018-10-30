import React, { Fragment } from "react";
import { connect } from "react-redux";

// const mapState = state => ({
//   error: state.errorMsg.message
// });

// const ErrorMessage = ({ error }) => {

//   let ans = '';
//   if(error.message){
//     if(error.message.length >= 38){
//       ans= error.message.substring(38, 61);
//     }else{
//       ans=error.message+''
//     }
//   }

//   return (
//     <Fragment>
//       {/* {error ? (
//         <span style={{ fontSize: "10px" }}>
//           {error
//             ? error.length >= 38
//               ? error.substring(38, 61)
//               : error
//             : ''}
//         </span>
//       ):('')} */}

//       <span>
//         {ans}
//       </span>
//     </Fragment>
//   );
// };

// export default connect(mapState)(ErrorMessage);

 

const ErrorMessage = ({ error }) => {
  let ans= ''
  if(error.message){
    if(error.message.message === 'Object(...) is not a function' ){
      ans=''
    }else if(error.message.message.length >= 38){
      ans= error.message.message.substring(38, 61);
    }else{
      ans=error.message.message
    }
  }

  return(
  <Fragment>
    {error.message && <span style={{fontSize:'10px'}}>{ans}</span>}
  </Fragment>
  )
}

export default connect(store => ({ error: store.errorMsg }))(ErrorMessage);