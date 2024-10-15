const initialState = {
    user: {
        email: "",
        name: "",
        phoneNumber: "",
        role: "",
        password: "",
        otp: ""
    }

}


export default function userReducers(state = initialState, action) {
    switch (action.type) {
        case "SIGNUP": {
            return { ...state, user: action.payload }
        }
        case "SELECT_ROLE": {
            return { ...state, user: { ...state.user, role: action.payload } }
        }
        default:
            return state;
    }
}





