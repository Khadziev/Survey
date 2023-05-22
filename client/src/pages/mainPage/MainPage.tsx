import React from 'react'

const MainPage = () => {
    return (
        <div>MainPage</div>
    )
}

export default MainPage




// import { Button } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../store/hook";
// import { defaultState } from "../../store/state/authSlice";


// const MainPage = () => {

//     const { name } = useAppSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const signout = () => {
//         localStorage.removeItem("token");
//         navigate("/signin");
//         dispatch(defaultState());
//     };

//     return (
//         <div>
//             User Name - {name}
//             <Button onClick={signout}>Signout</Button>
//         </div>
//     );
// }

// export default MainPage
