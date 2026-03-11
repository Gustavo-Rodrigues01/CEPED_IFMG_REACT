import { Ban } from "lucide-react";
import { useState } from "react";

function WithPremiumAccess(Component) {

  return function PremiumComponent(props) {

    const [isPremium, setIsPremium] = useState(false);

    if (!isPremium) {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center border rounded-xl shadow-md">
          
          <h2 className="flex items-center gap-2 text-xl font-bold text-red-500">
            <Ban size={22}/>
            Conteúdo Premium
          </h2>

          <p className="text-gray-500 mt-2">
            Faça upgrade para visualizar o gráfico de tarefas.
          </p>

          <button
            onClick={() => setIsPremium(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Fazer Upgrade
          </button>

        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default WithPremiumAccess;