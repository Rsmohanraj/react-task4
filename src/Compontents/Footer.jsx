import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
    <footer className="py-5 bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">Copyright <Link to={"mailTo:vijaymayhul@gmail.com"}>learning @Guvi geek IIT Network PVT.LTD</Link> 2024</p>
        </div>
    </footer>
    </>
  )
}

export default Footer