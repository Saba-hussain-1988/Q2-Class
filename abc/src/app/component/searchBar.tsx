import Image from "next/image";
import search_icon from "../../../public/images/Vector3.png"
import { useState } from "react";

export default function SearchBar () {
  const [query, setQuery] = useState("");

  const handleSearch = (e:any) => {
    e.preventDefault();
    console.log("Search query:", query);
    // we can handle the search logic here
  };

  return (
    <form onSubmit={handleSearch} className="w-[372px] h-[56px] flex p-[16px] text-left space-x-2 rounded-lg opacity-100 mr-[26px]" style={{backgroundColor:"#F5F5F5"}}>
      
      <button
        type="submit"
        className="h-[24px] w-[24px] opacity-100" >
        <Image src={search_icon} alt="search icon" className="h-[16px] w-[16px] items-center font-semibold stroke-[1.5px] rounded-full"/>
      </button>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[47px] h-[18px] opacity-50 font-medium text-sm"
      />
    </form>
  );
};

