"use client";
import {  outfitFont } from "@/app/font";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon,X } from "lucide-react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import React, { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [value, setvalue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value.trim()) return;
  
    const url = queryString.stringifyUrl({url: "/search",   query: { term: value.trim() }});
    router.push(url);
  };

  const handleClear = ()=>{
    setvalue("")
  }
  return (
    <form
      className="w-full lg:w-[400px] relative flex items-center bg-slate-700 rounded"
      onSubmit={handleSubmit}
    >
      <Input
      value={value}
      onChange={(e)=>setvalue(e.target.value)}
        placeholder="search"
        className={`${outfitFont.className} rounded-r-none border-none font-medium capitalize`}
      />
      {
        value && <X onClick={handleClear} className="cursor-pointer hover:scale-90 transition hover:opacity-85"/>
      }
      <Button
        type="submit"
        variant="secondary"
        size="sm"
        className="rounded-l-none"
      >
        <SearchIcon className="cursor-pointer hover:scale-90 transition hover:opacity-85" />
      </Button>
    </form>
  );
};

export default Search;
