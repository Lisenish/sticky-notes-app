const initialState = {
    0: {
        id: 0,
        name: "Dmitry Ivanov",
        email: "liseniss@gmail.com"
    }
}

//TODO: add users load, authentication
const users = (state = initialState, action) => state;

export const getUserById = (state, id) => state[id];

export default users;

