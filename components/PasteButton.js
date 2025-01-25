"use client"
import React, { useState } from "react";
import Receive from "./Receive";
import { useQueryState } from "nuqs";

const PasteButton = () => {
  const [id, setid] = useQueryState('id', {defaultValue: '' });
  const [route, setroute] = useQueryState('route', {defaultValue: '' });
  const [name, setname] = useQueryState('name', {defaultValue: '' });
  const [name2, setname2] = useQueryState('name2', {defaultValue: '' });
  const [ads, setads] = useQueryState('ads', {defaultValue: '' });
  const [type, settype] = useQueryState('type', {defaultValue: '' });
  const [ev, setev] = useQueryState('ev', {defaultValue: '' });
  const [metatitle, setmetatitle] = useQueryState('metatitle', {defaultValue: '' });
  const [metadesc, setmetadesc] = useQueryState('metadesc', {defaultValue: '' });
  const [keywords, setkeywords] = useQueryState('keywords', {defaultValue: '' });
  const [publishedAt, setpublishedAt] = useQueryState('publishedAt', {defaultValue: '' });
  const [modifiedAt, setmodifiedAt] = useQueryState('modifiedAt', {defaultValue: '' });
  const [h1, setH1] = useQueryState('h1', {defaultValue: '' });
  const [img, setImg] = useQueryState('img', {defaultValue: '' });
  const [subh1, setSubh1] = useQueryState('subh1', {defaultValue: '' });
  const [desc, setDesc] = useQueryState('desc', {defaultValue: '' });
  const [head1, setHead1] = useQueryState('head1', {defaultValue: '' });
  // const [, set] = useQueryState('', {defaultValue: '' });


  const idp = async () => {
    const text = await navigator.clipboard.readText();
    setid(text);
  };
  const routep = async () => {
    const text = await navigator.clipboard.readText();
    setroute(text);
  };

  return (
    <div className="space-y-4 px- md:px-36 lg:px-72">

    <div className="flex justify-between gap-2 items-center">
      <div className="flex items-center">
        <div onClick={idp}><Receive /></div>
        <div onClick={idp} className="pl-6 pr-6">id</div >
      </div><div className="flex items-center gap-1 md:gap-4">
        <div className="hidden md:flex" onClick={idp}><Receive /></div>
        <input value={id} onChange={(e) => setid(e.target.value)} 
         className="h-[40px] md:w-[500px] lg:w-[600px] border px-2 outline-none" type="text" placeholder=""/>
        <div onClick={idp}><Receive /></div>
      </div>
    </div>

    <div className="flex justify-between gap-2 items-center">
      <div className="flex items-center">
        <div onClick={routep}><Receive /></div>
        <div onClick={routep} className="pl-6 pr-6">id</div >
      </div><div className="flex items-center gap-1 md:gap-4">
        <div className="hidden md:flex" onClick={routep}><Receive /></div>
        <input value={route} onChange={(e) => setroute(e.target.value)} 
         className="h-[40px] md:w-[500px] lg:w-[600px] border px-2 outline-none" type="text" placeholder=""/>
        <div onClick={routep}><Receive /></div>
      </div>
    </div>



   
    
    
    
    </div>
  );
};

export default PasteButton;
