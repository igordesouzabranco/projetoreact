import * as types from '../types'

const initialState = {
  clickedButton: false,
}

// eslint-disable-next-line react-refresh/only-export-components
export default function (state = initialState, action) {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      const newState = { ...state }
      newState.clickedButton = !newState.clickedButton
      return newState
    }
    case types.CLICKED_BUTTON_FAILURE: {
      console.log('CLICKED_BUTTON_FAILURE')
      return state
    }
    case types.CLICKED_BUTTON_REQUEST: {
      console.log('CLICKED_BUTTON_REQUEST')
      return state
    }
    default: {
      return state
    }
  }
}
