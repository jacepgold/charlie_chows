import axios from 'axios';
import { setFlash } from './flash';

const setItems = (items) => {
  return { type: 'SET_MENU_ITEMS', items: items }
}

export const fetchMenuItems = () => {
  return dispatch => {
    axios.get(`/api/menu_items`)
      .then( res => {
        dispatch(setItems(res.data))
        console.log(res.data)
      })
      .catch( err => {
        dispatch(setFlash('Error fetching items.', 'red', 'inverted'))
        console.log(err)
    });
  }
}
