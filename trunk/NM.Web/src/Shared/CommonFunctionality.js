import { useHistory } from "react-router-dom"

const CommonFunctionality = (route) => {
    const history = useHistory()
    const onClickGoTo = (link) => {
        history.push(link)
    }
    return onClickGoTo(route)
}

export default CommonFunctionality

