import { Link } from "react-router-dom"

Link
const Home = () => {
  return (
    <div id="home" className="py-8 mt-12">
      <Link to="/">Welcome to Home</Link>
    </div>
  )
}

export default Home