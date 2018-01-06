const items = (state = [], action) => {
  switch(action.type) {
    case 'SET_MENU_ITEMS':
      return action.items
    default:
      return state;
  }
}

export default items;
