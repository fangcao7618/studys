export default function changeItem(state = {'curItem': 'item1'}, action){
  switch(action.type) {
    case 'CHANGE_ITEM':
      return Object.assign({}, {
        curItem: action.curItem
      });
    default:
      return state;
  }
}