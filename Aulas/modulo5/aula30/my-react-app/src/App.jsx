import Car3 from "./components/car3";
import Car from "./components/Car";
import Car2 from "./components/Car2";
import Parent from "./components/parent";
import FavoriteColor from "./components/Usestate";
function App() {
 
  let x = [1964,1965,1966]
  let y = {name:"ford", model:"Mustang"};

  return (
    <>
      
      <Car brand="Ford" model="Mustang" color="red" year = {1969}/>
      <Car2 years={x} carInfo={y}/>
      <Car3 color ="red" brand ="Ford" model="Mustang" state="new"/>

      <h1>Exemplo8 W3C</h1>
      <Parent/>

      <h1>Exemplo9</h1>
      <FavoriteColor/>
    </>
  );
};

export default App;
