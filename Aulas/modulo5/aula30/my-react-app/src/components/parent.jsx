import Son from "./Son";
import Daughter from "./Daughter";
function Parent() {
  return (
    <div>
      <h2>My two Children</h2>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}

export default Parent;