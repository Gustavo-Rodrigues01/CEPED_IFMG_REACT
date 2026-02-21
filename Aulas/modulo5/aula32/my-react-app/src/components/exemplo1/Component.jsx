import { useState } from 'react';
import Component2 from './Component2';

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <>
      <p>{`Hello ${user}!`}</p>
      <Component2 user={user} />
    </>
  );
}
export default Component1;