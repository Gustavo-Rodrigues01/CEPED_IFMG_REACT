import Component3 from './Component3';

function Component2({ user }) {
  return (
    <>
      <p>Component 2</p>
      <Component3 user={user} />
    </>
  );
}
export default Component2;