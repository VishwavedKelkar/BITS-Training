import { Product, User } from "../Types/types";

type Action = 
| {type:'SET_PRODUCTS';payload:Product[]} 
| {type:'ADD_TO_CART';payload:Product}
| {type:'REMOVE_FROM_CART';payload:number}
| {type:'SET_USER';payload:User|null}
| {type:'SET_ADMIN';payload:boolean}
| {type:'INCREMENT_QUANTITY';payload:number}
| {type:'DECREMENT_QUANTITY';payload:number}

export const initialState = {
    products: [] as Product[],
    cart:[] as Product[],
    user:null as User|null,
    admin:false,
};

export const reducer =(state = initialState, action: Action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {...state, products: action.payload};
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, action.payload]};
        case 'REMOVE_FROM_CART':
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)};
        case 'SET_USER':
            return {...state, user: action.payload};
        case 'SET_ADMIN':
            return {...state, admin: action.payload};
        case 'INCREMENT_QUANTITY':
            return {...state, cart: state.cart.map(item => 
                item.id === action.payload ? {...item, quantity: item.quantity + 1} : item
            )};
        case 'DECREMENT_QUANTITY':
            return {...state, cart: state.cart.map(item => 
                item.id === action.payload ? {...item, quantity: Math.max(1, item.quantity - 1)} : item
            )};
        default:
            return state;
    }
};
