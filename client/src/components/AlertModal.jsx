function AlertModal({ fun }) {
  return (
    <div className="flex p-4 justify-center items-start w-screen min-h-screen top-0 bg-black/35 fixed ">
      <div className="bg-blue-700 w-full max-w-md mx-auto h-52 gap-4  flex justify-center flex-col items-center rounded-lg shadow-md">
        <h3 className="text-white font-mono text-2xl">Error Url Invalida</h3>
        <button
          onClick={() => {
            fun(false);
          }}
          className="h-10 px-4 bg-blue-600 border-none text-white text-lg cursor-pointer font-medium font-mono rounded-md hover:bg-blue-500 transition-all duration-200"
        >
          Volver a Intentarlo
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
