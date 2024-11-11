import { useEffect } from "react";
import LiUrls from "./LiUrls";

function TableUrls({ listUrls = [] }) {

  useEffect(()=>{
    listUrls.reverse()
    console.log(listUrls)
  },[])
  return (
    <div className="bg-blue-700 w-full max-w-md mx-auto h-auto p-4 flex justify-between items-center rounded-lg shadow-md">
      <ul className="flex flex-col gap-2 w-full">
        {listUrls.map((e, index) => (
          <LiUrls url={e.url} pDuration={e.expiri} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default TableUrls;
