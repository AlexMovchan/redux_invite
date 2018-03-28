const ADD_TABLE = 'ADD_TABLE';
const SET_COLOR = 'SET_COLOR';

const initialState = {
  table: [
    {name: 'Eugenue', surname: 'Ivakhno'},
    {name: 'Svitlana', surname: 'Ivakhno'},
    {name: 'Olexiy', surname: 'Kuts'},
    {name: 'Tetiana', surname: 'Kuts???'},
    {name: 'Olexandr', surname: 'Skoversky'},
    {name: 'Vitaliy', surname: 'Vushnivskyi'},
    {name: 'Petro', surname: 'Tsurkevich'},
    {name: 'Vitaliy', surname: 'Andryhin'},
  ],
  color: '#b14eff'
};
  
export default function userState(state = initialState, action) {
  switch (action.type){
    case ADD_TABLE: 
      return {
        ...state,
        table: [...state.table, action.data]
      }
    case SET_COLOR: 
      return {
        ...state,
        color: action.data
      }
    default:
      return state;
  }
}

export function addTable(data){
  return {
    type: ADD_TABLE,
    data
  }
}

export function setStoreColor(data){
  return {
    type: SET_COLOR,
    data
  }
}