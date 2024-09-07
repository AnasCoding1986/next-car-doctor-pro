import axios from "axios";

export const getServices = async () => {
    const res = await axios.get('http://localhost:3000/services/api/getAll');
    return res.data
}

export const getServicesDetails = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/api/${id}`);
    return res.data
}

export const getBookingDetails = async (id) => {
    const res = await axios.get(`http://localhost:3000/myBooking/api/delete-booking/${id}`);
    return res.data
}