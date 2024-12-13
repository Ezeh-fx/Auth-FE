// import axios from "axios";
// const url = "http://localhost:2006/api/v1"

// export const signUp = async (data: any) => {
//     try {
//         const res = await axios.post(`${url}/create-user`, data, { withCredentials: true ,  headers: {
//             'Content-Type': 'application/json'
//           } });
//         return res.data
//     } catch (error : any) {
//         console.log(error);
//     }
// }

import axios from 'axios';

const url = 'http://localhost:2006/api/v1';

export const signUp = async (data: any) => {
    try {
        const res = await axios.post(`${url}/create-user`, data, {
            withCredentials: true,  // This ensures cookies are sent with the request
            headers: {
                'Content-Type': 'application/json',  // Ensure the correct content type
            },
        });
        return res.data;  // Handle the response
    } catch (error: any) {
        console.log(error);  // Handle the error
    }
};
