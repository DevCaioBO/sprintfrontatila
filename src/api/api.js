import axios from "axios";
//caio<- disponibilizar sua api com o transporte da baseURL é interessante com axios
//caio<- para ser facil utilizando os endpoints sem repetir código demais.
const api = axios.create({
    baseURL:"https://api.jikan.moe/v4"
})

export default api;