import { useDispatch } from "react-redux";
import { ADD_ITEM } from "./store/cartSlice";

function ListaDeProdutos() {
  const dispatch = useDispatch();

  const produtos = [
    { id: 1, nome: "Notebook" },
    { id: 2, nome: "Mouse" },
    { id: 3, nome: "Teclado" },
  ];

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {produtos.map((produto) => (
        <div key={produto.id}>
          {produto.nome}
          <button
            onClick={() => dispatch(ADD_ITEM(produto))}
          >
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaDeProdutos;