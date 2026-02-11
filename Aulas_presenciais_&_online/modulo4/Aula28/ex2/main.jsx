const Header = () => {
    const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
    };
    const myStyle2 = {
        color: "white",
        backgroundColor: "red",
        padding: "10px",
        magin: "20px",
        fontFamily: "Sans-Serif"
        };
    return (
    <>
    <h1 style={myStyle}>Hello Style!</h1>
    <h2 style={myStyle2}>Hello too!</h2>
    <p>Add a little style!</p>
    </>
    );
    }
    
    ReactDOM.render(<Header />, document.getElementById('root'));