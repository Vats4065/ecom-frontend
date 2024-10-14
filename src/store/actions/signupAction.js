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
        default:
            return state;
    }
}





