import { Navigate } from "react-router";
import Mainpage from "../components/Mainpage"
import SecondPage from "../components/secondPage";

function route(path, element, exact = true) {
    return { exact, path, element, };
}
const routes = [
    // route('/', () => <Navigate to="/home" />),
    route("/second", <SecondPage />),
    route("/home", <Mainpage />)
]

export default routes