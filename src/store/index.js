import { configureStore } from '@reduxjs/toolkit'
import usersStore from './featchers/users'

export default configureStore({
  reducer: {
    users: usersStore.reducer,
  },
})

export {
  usersStore,
}