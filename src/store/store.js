import { configureStore } from '@reduxjs/toolkit'
import trainer from './slicesglobales/trainer.slice'

export default configureStore({
 reducer:{
    trainer
  }
})