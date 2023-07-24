import {io} from 'socket.io-client'
import { BaseUrl } from '../constants/constants'

const socketInstance = io(BaseUrl)

export default socketInstance