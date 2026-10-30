const initialState = {
  clickedButton: false,
}

// eslint-disable-next-line react-refresh/only-export-components
export default function (state = { initialState }, action) {
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
