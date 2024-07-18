export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'eddie'}, ...actionInfo.action.payload ]
    const updateActionInfo = { 
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured } // modifica el payload del action
    }
    next(updateActionInfo);
}