import { useSelector, useDispatch } from "react-redux";
import { REMOVE_ITEM } from "./store/cartSlice";

function Carrinho() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrinho</h2>

      {items.length === 0 && <p>Carrinho vazio</p>}

      {items.map((item) => (
        <div key={item.id}>
          {item.nome}
          <button
            onClick={() => dispatch(REMOVE_ITEM(item.id))}
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default Carrinho;