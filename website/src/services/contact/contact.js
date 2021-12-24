import { app } from '../../configuration/app.config'
import axios from 'axios'
import { toast } from 'react-toastify'

const PATH = 'contact/'

const createContactService = (name, email, phone, message) => {

  var error = 0;
  if (!message) { error++; toast.warn('Missing Message') }

  if (error == 0) {
    axios.post(`${app.apiUrl}${PATH}`, {
      name, email, phone, message
    })
    .then(res => {
      (res.data.error === 0) && toast.success('Message, Successfully created');
      (res.data.error === 1) && toast.warn('Error while creating message')
    }).catch(err => {
      toast.error('Error while creating')
    })
  }

}


export {
  createContactService,
}
