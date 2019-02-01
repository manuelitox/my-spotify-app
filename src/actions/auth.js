import * as constants from 'constants/auth'
import makeActionCreator from 'lib/make-action-creator'

// Actions creators:
// -----------------
export const authUpdate = makeActionCreator(constants.AUTH_UPDATE, 'token')