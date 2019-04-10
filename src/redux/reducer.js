

let initial_state = {
    house_name:"",
    address:"",
    city:"",
    state:"",
    zip:0,
    img:"https://www.freeiconspng.com/uploads/no-image-icon-4.png",
    mortgage:0,
    rent:0
}
const update_name = "update_name"
const update_address = "update_address"
const update_city = "update_city"
const update_state = "update_state"
const update_zip = "update_zip"
const update_img = "update_img"
const update_mortgage = "update_mortgage"
const update_rent = "update_rent"

export default function reducer(state = initial_state,action){
    switch(action.type){
        default:
            return state;
        case update_name:
            return {...state, house_name:action.payload}
        case update_address:
            return {...state, address:action.payload}
        case update_city:
            return {...state, city:action.payload}
        case update_state:
            return {...state, state:action.payload}
        case update_zip:
            return {...state, zip:action.payload}
        case update_img:
            return {...state, img:action.payload}
        case update_mortgage:
            return {...state, mortgage:action.payload}
        case update_rent:
            return {...state, rent:action.payload}
    }
}

export function updateName(name){
    return{
        type:update_name,
        payload:name
    }
}
export function updateAddress(name){
    return{
        type:update_address,
        payload:name
    }
}
export function updateCity(name){
    return{
        type:update_city,
        payload:name
    }
}
export function updateState(name){
    return{
        type:update_state,
        payload:name
    }
}
export function updateZip(name){
    return{
        type:update_zip,
        payload:name
    }
}
export function updateimg(img){
    return{
        type:update_img,
        payload:img
    }
}
export function updateMortgage(mort){
    return{
        type:update_mortgage,
        payload:mort
    }
}
export function updateRent(rent){
    return{
        type:update_rent,
        payload:rent
    }
}