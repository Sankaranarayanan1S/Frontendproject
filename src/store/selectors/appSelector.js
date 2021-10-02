import { createSelector } from "reselect";


export const getAppState = state => state.appReducer;
export const getSelectedCategory = state => state?.appReducer?.selectedCategory;
export const getFilterList = createSelector([getAppState, getSelectedCategory], (state, selectedCategory) =>{
    const responseList = state.responseData;
    const filterKey = selectedCategory;
    if (filterKey === 'all') return responseList;
    else {
        return responseList.filter((each) => each?.category.toLowerCase() === filterKey);
    }
})

export const getAvailableOptions = createSelector(getAppState, (state) => state.availableOptions || [])
