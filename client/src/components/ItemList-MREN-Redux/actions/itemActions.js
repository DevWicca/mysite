import {GET_ITEMS, ADD_ITEM, DELETE_ITEM,ITEMS_LOADING} from './types'
import axios from 'axios'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'



export const getItems = () => dispatch => {
    dispatch(SetItemsLoading())
    axios.get('/api/items')
    .then(res => 
        dispatch({
            type:GET_ITEMS,
            payload:res.data
        })
    ).catch(error => dispatch(returnErrors(error.response.data.msg, error.response.status)))
}

export const addItem = item => (dispatch, getState) => {
    axios
        .post('/api/items',item, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
}

export const DeleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/items/${id}`,tokenConfig(getState)).then(res => 
     dispatch({
         type: DELETE_ITEM,
         payload: id
     })
    ).catch(error => dispatch(returnErrors(error.response.data.msg, error.response.status)))
    
}



export const SetItemsLoading = () => {
    return{
        type: ITEMS_LOADING,
    }
}
