const initialState = { info: [] }

export function setInfo(payload) {
    return { type: 'SET_INFO', payload: payload }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case 'SET_INFO':
            return { ...state, info: payload }
        default:
            return state
    }
}