import { useEffect, useState } from "react";
import LiUrls from "./LiUrls";

function TableUrls({ listUrls = [], newUrl }) {
  const [tablreUrlList,setTableUrlList] = useState([])
  useEffect(() => {
    setTableUrlList(listUrls)
    setTableUrlList(tablreUrlList.reverse())
    console.log(listUrls);
  }, [listUrls]);
  return (
    <div className="bg-blue-700 w-full max-w-md mx-auto h-auto p-4 flex justify-between items-center rounded-lg shadow-md">
      <ul className="flex flex-col gap-2 w-full">
        {listUrls.map((e, index) => (
          <LiUrls
            url={e.url}
            pDuration={e.expiri}
            pName={e.nameUrl}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default TableUrls;
