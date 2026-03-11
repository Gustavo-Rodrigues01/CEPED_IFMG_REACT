import Greeting from "./Greeting";
function withLogger(WrappedComponent) {

  function NewComponent(props) {

    const componentName =
      WrappedComponent.displayName || WrappedComponent.name || "Component";

    console.log(`Renderizando componente: ${componentName}`);

    return <WrappedComponent {...props} />;
  }

  return NewComponent;
}

const GreetingWithLogger = withLogger(Greeting);

export default GreetingWithLogger;