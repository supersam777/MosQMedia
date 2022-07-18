import Axios from 'axios'


const ax_laravel = Axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

export const register = async ( params ) => {
    return await ax_laravel.post("register",  params )
}

export const signin = async ( params ) => {
    return await ax_laravel.post("login",  params )
}

// mosque
export const mosqueCreate = async ( params ) => {
    return await ax_laravel.post("mosqueCreate",  params )
}

export const mosqueList = async ( params ) => {
    return await ax_laravel.post("mosqueList",  params )
}

export const mosqueDelete = async ( params ) => {
    return await ax_laravel.post("mosqueDelete",  params )
}


export const mosqueListGuestuser = async ( ) => {
    return await ax_laravel.post("mosqueListGuestuser" )
}