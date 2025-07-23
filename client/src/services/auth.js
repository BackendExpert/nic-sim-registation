import axios from 'axios'
import secureLocalStorage from 'react-secure-storage';

const apiurl = import.meta.env.VITE_APP_API + '/auth'

export const signup = async (data) => {
    try {
        const res = await axios.post(apiurl + '/signup', data);
        if (res.data.Status === "Succsss") {
            secureLocalStorage.setItem('verifyemail', res.data.verifyToken)
            return { success: true, message: res.data.Message };
        } else {
            return { success: false, error: res.data.Error };
        }
    } catch (err) {
        return { success: false, error: err.message || "Something went wrong" };
    }
};

export const verifyemail = async (data) => {
    try {
        const emailverifytokem = secureLocalStorage.getItem('verifyemail')
        const res = await axios.post(apiurl + '/verify-email', data, {
            headers: {
                Authorization: `Bearer ${emailverifytokem}`,
            }
        });
        if (res.data.Status === "Succsss") {
            localStorage.clear()
            return { success: true, message: res.data.Message };
        } else {
            return { success: false, error: res.data.Error };
        }
    } catch (err) {
        return { success: false, error: err.message || "Something went wrong" };
    }
};

export const signin = async (data) => {
    try {
        const res = await axios.post(apiurl + '/signin', data)
        if (res.data.Status === "Success") {
            localStorage.setItem('login', res.data.Token);
            localStorage.setItem('dashmenuID', 1);
            return { success: true, message: res.data.Message };
        }
        else {
            return { success: false, error: res.data.Error };
        }
    }
    catch (err) {
        return { success: false, error: err.message || "Something went wrong" };
    }
}