import { useState, useEffect } from "react";
import "./App.css";
import ResultUrl from "./components/ResultUrl";
import TableUrls from "./components/TableUrls";
import { ClipLoader } from "react-spinners";

import AlertModal from "./components/AlertModal";
function App() {
  const [urlName, setUrlName] = useState("");
  const [loadingUrl, setLoadingUrl] = useState(false);
  const [responseUrl, setResponseUrl] = useState("");
  const [url, setUrl] = useState("");
  const [urlsList, setUrlsList] = useState(
    JSON.parse(localStorage.getItem("urls")) || []
  );
  const [alertError, setAlerError] = useState(false);

  const handleUrl = async (e) => {
    e.preventDefault();
    if (!url) {
      setAlerError(true);
      return;
    } else {
      setLoadingUrl(true);

      try {
        const response = await fetch("http://localhost:4000/sendurl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ urlss: url }),
        });

        if (response.ok) {
          const data = await response.json();
          setUrlsList(
            urlsList.concat({
              url: data.mensage,
              expiri: data.duration,
              nameUrl: urlName,
            })
          );
          setResponseUrl(data.mensage || "URL no disponible");
          setUrlName("");
        } else {
          console.log("Error en la respuesta:", response);
          setAlerError(true);
        }
      } catch (error) {
        console.error("Error de red:", error);
      } finally {
        setLoadingUrl(false);
      }
    }
  };
  useEffect(() => {
    console.log(localStorage.getItem("urls"));
    if (urlsList.length > 0)
      setTimeout(() => {
        localStorage.setItem("urls", JSON.stringify(urlsList.reverse()));
      }, 1000);
  }, [urlsList]);

  return (
    <div className="p-0 flex flex-col min-h-screen backdrop-invert-0">
      <header className="bg-blue-600 font-signika h-16 flex items-center justify-between px-8 shadow-lg">
        <h1 className="text-2xl text-white font-bold">AcortUrls</h1>
      </header>

      <main className="flex-1 flex flex-col justify-start items-center gap-4 p-4">
        {alertError ? <AlertModal fun={setAlerError} /> : null}
        <div className="w-full max-w-md mx-auto bg-blue-700 p-4 rounded-lg shadow-xl flex flex-col gap-6">
          <div className="w-full">
            <h2 className="text-2xl font-mono text-white text-center">
              Ingrese una URL
            </h2>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleUrl}>
            <input
              type="text"
              className="h-12 w-full px-4 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-none"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <input
              type="text"
              placeholder="Name (Optional)"
              onChange={(e) => setUrlName(e.target.value)}
              className="h-12 w-full px-4 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-none"
            />
            <button className="h-10 w-full bg-blue-600 border-none text-white text-lg cursor-pointer font-medium font-mono rounded-md hover:bg-blue-500 transition-all duration-200">
              {loadingUrl ? <ClipLoader size={10} /> : "Buscar"}
            </button>
          </form>
        </div>
        {urlsList.length > 0 ? (
          <TableUrls listUrls={urlsList} newUrl={responseUrl} />
        ) : null}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>Sígueme en:</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://github.com/tu-usuario/nombre-del-proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Repositorio del Proyecto
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500">
          © 2024 AcortUrls. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
