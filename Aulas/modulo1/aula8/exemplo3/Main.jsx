const name = "Maria";
const today = new Date();

function formatDate(date) {
return date.toLocaleDateString();
}

return (
<div>
<h1>Olá, {name}!</h1> // Variável
<p>Hoje é {formatDate(today)}</p> // Função
<p>2 + 2 = {2 + 2}</p> // Expressão
</div>
);

createRoot(document.getElementById("root")).render(
myElement
);