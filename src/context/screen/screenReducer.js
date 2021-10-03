import { CHAGE_SCREEN } from '../types'

const handlers = {
  [CHAGE_SCREEN]: (_, payload) => payload,
  DEFAULT: (state) => state,
}

export const ScreenReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}
