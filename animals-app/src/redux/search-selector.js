export const getFilter = (state) =>{
    return state.search.filter
}

export const getAnimals = (state) =>{
    return state.search.animals
}

export const getPageCount = (state) =>{
    return state.search.pageCount
}

export const getCurrentPage = (state) =>{
    return state.search.currentPage
}

export const getSearchStr = (state) =>{
    return state.search.search
}