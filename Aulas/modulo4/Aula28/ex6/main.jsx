const MyHeader = styled.h1`
padding: 10px 20px;
background-color: #007bff;
color: white;
`;
const MyHeader2 = styled.h1`
padding: 10px 20px;
background-color: red;
color: white;
`;

function App() {
return (
<>
<MyHeader>Welcome!</MyHeader>
<MyHeader2>Hello world</MyHeader2>
</>
);
}

ReactDOM.render(<App />, document.getElementById('root'));