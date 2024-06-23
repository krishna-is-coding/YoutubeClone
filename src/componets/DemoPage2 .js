import React, { useState, useRef, useEffect } from "react";

const DemoPage2 = () => {
  const [Y, setY] = useState(0);
  const ref = useRef(0);
  const i = useRef(null);
  let x = 10;

  console.log("Rendering....");

  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(Y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">state = {Y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref" + ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Interval
      </button>
    </div>
  );
};

export default DemoPage2;
