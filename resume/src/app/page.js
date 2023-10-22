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
      <div className="flex justify-center my-2">
        <button className="bg-slate-100 px-1" onClick={handlePrint}>
          Print this out!
        </button>
      </div>
      <Main ref={componentRef} />
    </div>
  );
}
