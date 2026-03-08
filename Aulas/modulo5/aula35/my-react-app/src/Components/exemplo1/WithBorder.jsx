import Greeting from "./Greeting";

function WithBorder(WrappedComponent){
    return function NewComponent(props){
        return (
      <div style={{ border: '2px solid red', padding: '5px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

const GreetingWithBorder = WithBorder(Greeting);

export default GreetingWithBorder