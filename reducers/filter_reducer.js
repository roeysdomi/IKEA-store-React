import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  GET_SINGLE_PRODUCT_BEGIN,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'



const filter_reducer = (state, action) => {

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {

    return {
      ...state,
      lastid:action.payload.id,
    signleproduct:action.payload.data2
    }
  }

  if (action.type === LOAD_PRODUCTS) {

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    }
  }
  if (action.type === FILTER_PRODUCTS) {
      let unfilterd=state.all_products
      if(action.payload.company!=='all')
      {
        unfilterd=unfilterd.filter(pro=>pro.company===action.payload.company)
      }
      if(action.payload.category!=='all')
      {
        unfilterd=unfilterd.filter(pro=>pro.category===action.payload.category)
      }
      if(action.payload.price!==0)
      {
        unfilterd=unfilterd.filter(pro=>pro.price<=action.payload.price)
      }

    return {
      ...state,
      filtered_products: [...unfilterd],
    }
  }
}

export default filter_reducer
