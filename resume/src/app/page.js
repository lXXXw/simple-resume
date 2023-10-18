"use client";
import { Main } from "@/components/main/main";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <Main ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}
