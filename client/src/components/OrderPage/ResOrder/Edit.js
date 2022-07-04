// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import Show from "../Show";

// const Edit = ({ order }) => {
//   let arr;
//   let ar = "";
//   let me = "";
//   let x = "";
//   let count = 0;

//   const spp = (item, user) => {
//     arr = item;
//     ar += arr[0] + " ";
//     me = ar.split(" ");
//     for (let i = 0; i < me.length; i++) {
//       for (let j = 1; j < me.length; j++) {
//         if (me[i] === me[j]) {
//           me.splice(j, 1);
//         }
//       }
//     }
//     let i = 0;
//     if (user === me[i]) {
//       return (
//         <div>
//           <div>
//             <Show order={order} />
//           </div>
//         </div>
//       );
//     } else {
//       console.log(me[i]);
//     }
//     i++;
//   };
//   const sp = () => {
//     order.summary.map((item) => spp(item.split(" ")));
//   };
//   useEffect(() => {
//     sp();
//   }, []);
//   return (
//     <div>
//       {
//         //    user?.result.name === me[i]
//       }
//     </div>
//   );
// };

// export default Edit;
