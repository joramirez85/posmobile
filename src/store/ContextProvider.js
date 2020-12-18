import React, { useReducer } from 'react'
import {
  Context,
  initialState,
  reducer
} from './index'

const ContextProvider = props => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
