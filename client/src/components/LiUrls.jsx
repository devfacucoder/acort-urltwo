import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";

function LiUrls({ url, pDuration, pName = "" }) {
  const [tiempo, setTiempo] = useState("");
  const [expiro,setExpiro] = useState(false)
  useEffect(() => {
    const futureDate = new Date(pDuration);
    const now = new Date();
    const difference = futureDate - now;
    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setTiempo(`${hours}:${minutes}`);
    } else {
      setTiempo("expiro");
      setExpiro(true)
    }
  }, []);
  return (
    <li className="flex w-full gap-2 justify-between">
      <p className="text-white h-10 text-1xl flex justify-start items-center font-medium font-mono px-2 truncate  w-1/2">
        {pName !== "" ? pName : url}
      </p>
      <p className="text-white -300 h-10 text-1xl flex justify-start items-center font-medium font-mono  w-16">
        {tiempo}
      </p>
      <button
        className="w-12 h-10 bg-white border-none font-mono text-black rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200"
        onClick={() => navigator.clipboard.writeText(url)}
      >
        <FaRegCopy fontSize={"20px"} />
      </button>
    </li>
  );
}

export default LiUrls;
