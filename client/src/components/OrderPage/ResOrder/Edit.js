import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Show from "../Show";

const Edit = ({ order }) => {
  let arr;
  let ar = "";
  let me = "";
  let x = "";

  const spp = (item) => {
    arr = item;
    ar += arr[0] + " ";
    me = ar.split(" ");
    for (let i = 0; i < me.length; i++) {
      for (let j = 1; j < me.length; j++) {
        if (me[i] === me[j]) {
          me.splice(j, 1);
        }
      }
    }
    console.log(me);
  };

  const sp = () => {
    order.summary.map((item) => spp(item.split(" ")));
  };
  useEffect(() => {
    sp();
  }, []);
  return (
    <div>
      <Show order={order} />
    </div>
  );
};

export default Edit;
