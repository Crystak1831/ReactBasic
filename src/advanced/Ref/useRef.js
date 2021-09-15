import { useEffect, useRef } from "react";

export default function UseRefAuto() {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  });

  return (
    <div>
      hello
      <input type="text" ref={myRef} />
    </div>
  );
}
