import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  clickedButton: false,
}

const reducer = (state = { initialState }, action) => {
  switch (action.type) {
    case 'CLICKED_BUTTON': {
      const newState = { ...state }
      newState.clickedButton = !newState.clickedButton
      return newState
    }
    default: {
      return state
    }
  }
}

const store = configureStore({
  reducer,
})

export default store
