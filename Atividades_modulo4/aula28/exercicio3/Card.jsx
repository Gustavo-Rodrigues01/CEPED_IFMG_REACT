const { useState } = React;

function Card({ imagem, nome, descricao }) {
  return (
    
    <> 
        <div
            className="
            flex flex-col justify-center
            w-[300px] h-[400px]
            bg-gray-200 dark:bg-zinc-700
            rounded-lg
            shadow-lg dark:shadow-white/50 
            transition-all duration-300 ease-out
            hover:scale-[1.02]
            hover:bg-gray-100 dark:hover:bg-zinc-500
            cursor-pointer
            m-4
            "
        >
            <img
            src={imagem}
            alt={nome}
            className="rounded-md m-4"
            />

            <h2 className="text-2xl font-semibold text-center m-4">{nome}</h2>

            <p className="text-black font-semibold text-sm text-justify m-6 dark:text-white">{descricao}</p>

        </div>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`
        min-h-screen
        flex flex-col items-center
        pt-10
        transition-colors duration-300
        ${theme === "dark" ? "dark bg-black text-white" : "bg-white text-black"}
      `}
    >
    <h1 className="text-2xl font-bold mb-6">Card de produto</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
            nome="YouTube"
            imagem="youtube.jpg"
            descricao="O YouTube é a maior plataforma de compartilhamento de vídeos do mundo."
        />
        <Card
            nome="YouTube"
            imagem="youtube.jpg"
            descricao="O YouTube é a maior plataforma de compartilhamento de vídeos do mundo."
      />
        <Card
            nome="YouTube"
            imagem="youtube.jpg"
            descricao="O YouTube é a maior plataforma de compartilhamento de vídeos do mundo."
      />
        <Card
            nome="YouTube"
            imagem="youtube.jpg"
            descricao="O YouTube é a maior plataforma de compartilhamento de vídeos do mundo."
      />
        <Card
            nome="YouTube"
            imagem="youtube.jpg"
            descricao="O YouTube é a maior plataforma de compartilhamento de vídeos do mundo."
      />
    </div>

      <button
        onClick={toggleTheme}
        className="
          mt-6
          px-6 py-2
          rounded
          bg-gray-200 dark:bg-zinc-800
          text-black dark:text-white
          transition-opacity duration-300
          hover:opacity-80
        "
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
