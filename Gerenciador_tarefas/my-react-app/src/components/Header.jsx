function Header(){

    return(
        <div className="bg-blue-200 
            flex 
            flex-row 
            p-4 
            space-y-2
            justify-evenly
            "
        >
            <p>tasks status</p>
            <button className="bg-gray-400  rounded-2xl w-20 h-7">dark/light</button>
        </div>
    )
}
export default Header;