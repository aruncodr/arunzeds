"use client"
import React, { useState } from "react";
import Receive from "./Receive";

const PasteButton = () => {
  const [id, setId] = useState("");

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setId(text);
  };

  return (
    <div className="space-y-4 md:px-36 lg:px-96">

    <div className="flex justify-between gap-2 items-center">
      <div className="flex items-center">
        <button onClick={handlePaste}><Receive /></button>
        <button onClick={handlePaste} className="pl-6 pr-6">Keywords</button >
      </div><div className="flex items-center gap-1 md:gap-4">
        <button className="hidden md:flex" onClick={handlePaste}><Receive /></button>
        <input value={id} onChange={(e) => setId(e.target.value)} 
         className="h-[40px] md:w-[500px] lg:w-[600px] border px-2 outline-none" type="text" placeholder=""/>
        <button onClick={handlePaste}><Receive /></button>
      </div>
    </div>



    
    
    
    
    
    </div>
  );
};

export default PasteButton;
