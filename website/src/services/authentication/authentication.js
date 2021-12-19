import { app } from '../../configuration/app.config'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const PATH = 'auth/'

const SignUpService = (name, username, email, password) => {

  var error = 0;
  if (!name) { error++; toast.warn('Missing Name') }
  if (!username) { error++; toast.warn('Missing Username') }
  if (!email) { error++; toast.warn('Missing Email') }
  if (!password) { error++; toast.warn('Missing Password') }

  if (error == 0) {
    axios.post(`${app.apiUrl}${PATH}create`, {
      name, username, email, password
    }).then(res => {
      (res.data.error === 0) && toast.success('Please Verify your email address', {autoClose: false});
      (res.data.error === 1) && toast.warn('Email or Username already exists', {autoClose: false})
    }).catch(err => {
      toast.error('Error while signing up')
    })
  }
}

const SignInService = async (email, password) => {

  var error = 0;
  if (!email) { error++; toast.warn('Missing Email') }
  if (!password) { error++; toast.warn('Missing Password') }

  if (error == 0) {
    const response = await axios({
      method: 'post',
      url: `${app.apiUrl}${PATH}login`,
      data: {email, password}
    })
    return response.data
  }
}

const VerifyAccountService = async (id) => {
  await axios.get(`${app.apiUrl}${PATH}verify/${id}`)
  .then(res => {
    if (res.data.error === 0) {
      toast.success('Account Verified', {autoClose: false});
      return true
    }
    if (res.data.error === 1) {
      toast.warn('Failed to verify account', {autoClose: false})
      return false
    }
  }).catch(err => {
    toast.error('Error while verifying account')
    return false
  })
}


export {
  SignUpService,
  SignInService,
  VerifyAccountService
}
