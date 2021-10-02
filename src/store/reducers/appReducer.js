const initialState = {
  responseData : [],
};

export const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "action":
      return { ...state };
    case "SAMPLE_BTN_CLICK":
      return {
        ...state,
        btnClickValue: action.payload,
      };
      
    case 'RESPONSE_RECEIVED':
      return {
        ...state,
        responseData : action.payload,
      }
    case 'SELECTED_CATEGORY': 
      return {
        ...state,
        selectedCategory : action.payload,
      }
    case 'CATEGORY_RESPONSE_RECEIVED':
      return {
        ...state,
        availableOptions : action.payload,
      }
    default:
      return state;
  }
};
