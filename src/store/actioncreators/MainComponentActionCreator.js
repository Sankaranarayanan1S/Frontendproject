export const invokeAPI = () => ({
    type : 'INVOKE_CATEGORY_API',
})


export const updateCategory = (value) => ({
    type: 'SELECTED_CATEGORY',
    payload: value,
})
