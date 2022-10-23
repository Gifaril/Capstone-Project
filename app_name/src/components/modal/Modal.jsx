// import "./modal.scss";
// import React, {useState} from "react";

// const Modal = (props) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false)
//   console.log(props)
//   return (
//       <div className="modalContainer">
//         <button 
//             className="openModalBtn"
//             onClick={() => {
//                 setModalIsOpen(true);
//             }}
//          >
//             ADD
//         </button>
//         <div className="titleCloseBtn"> 
//           <button
//             onClick={() => {
//                 setModalIsOpen(false);
//             }}
//           >
//             X
//           </button>
//           {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
//         </div>
//         <div className="title">
//           <h6>NEW ANNOUNCEMENT</h6>
//         </div>
//         <div className="wrapper">
//                 <textarea placeholder="New Announcement"></textarea>
//         </div>
//         <div className="footer">
//           <button>SAVE</button>
//         </div>
//       </div>
//   );
// }

// export default Modal; 