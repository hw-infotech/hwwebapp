// import { useHistory } from "react-router-dom"

// const CommonFunctionality = (route) => {
//     const history = useHistory()
//     const onClickGoTo = (link) => {
//         history.push(link)
//     }
//     return onClickGoTo(route)
// }

// export default CommonFunctionality

export const getRandomColor=()=>{
     var letters = "0123456789ABCDEF";
     var color = "#";
     for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
}

