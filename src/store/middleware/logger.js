const logger = store => next => action => {
    //TODO -> activate in case of need watch state of redux
    // console.group(action.type)
    // console.info('dispatching', action)
    let result = next(action)
    //TODO -> activate in case of need watch state of redux
    // console.log('next state', store.getState())
    // console.groupEnd()
    return result
}

export default logger