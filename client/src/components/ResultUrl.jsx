import { FaRegCopy } from "react-icons/fa";

function ResultUrl({ res }) {
  return (
    <div className="bg-blue-700 w-full max-w-md mx-auto h-auto p-4 flex justify-between items-center rounded-lg shadow-md">
      <h3 className="text-white text-1xl font-medium truncate">{res}</h3>
      <button
        className="w-12 h-10 bg-white border-none font-mono text-black rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200"
        onClick={() => navigator.clipboard.writeText(res)}
      >
        <FaRegCopy fontSize={"20px"} />
      </button>
    </div>
  );
}

export default ResultUrl;
