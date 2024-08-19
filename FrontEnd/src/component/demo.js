import { Link } from "react-router-dom";
function Demo(){
    return(
        <>
        <center><h1 style ={{color: "blue"}}>Welcome To C WebSite</h1></center>
        <h1>Select any one by Cliking the link OR Enter the "/home" </h1>
        <Link href src="http://localhost:3001/home"> Home</Link>
        </>
    );
}
export default Demo;