import { app } from '../../configuration/app.config'
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

const UpdateProfileService = (name, phone, description, image) => {

  var error = 0;
  if (!name) { error++; toast.warn('Missing Name') }
  if (!phone) { error++; toast.warn('Missing Phone') }
  if (!description) { error++; toast.warn('Missing Description') }

  if (error == 0) {

    var formData = new FormData()
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('description', description)
    if (image) { formData.append(`image`, image) }

    axios.put(`${app.apiUrl}${PATH}user`, formData,
    {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(res => {
      (res.data.error === 0) && toast.success('Successfully Updated');
      (res.data.error === 1) && toast.warn('Failed to Update')
    }).catch(err => {
      toast.error('Error while updating profile')
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

const ResetPasswordService = async (email) => {

  var error = 0;
  if (!email) { error++; toast.warn('Missing Email or Username') }

  if (error == 0) {
    const response = await axios({
      method: 'post',
      url: `${app.apiUrl}${PATH}reset`,
      data: {email}
    })
    if (response.data.error === 0) {
      toast.success('Email Sent', {autoClose: false});
      return true
    } else {
      toast.warn('Failed to reset', {autoClose: false})
      return false
    }
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

const VerifyAccountRepeatService = (id) => {
  axios.post(`${app.apiUrl}${PATH}verify/${id}`)
  .then(res => {
    if (res.data.error === 0) {
      toast.success('Account Verification Request Sent');
      return true
    }
    if (res.data.error === 1) {
      toast.warn('Failed to send verify account request')
      return false
    }
  }).catch(err => {
    toast.error('Error while verifying account')
    return false
  })
}

const UserProfileService = async (id) => {
  const result = await axios.get(`${app.apiUrl}${PATH}user/`,
    {headers: {'x-access-token': localStorage.getItem('token')}})
  if (result.data.error === 0) {
    return result.data.user
  }
  else if (result.data.error === 1) {
    return false
  }
}

const findAllService = async (limit, artist = '', category = '') => {
  const result = await axios.get(`${app.apiUrl}${PATH}artists/?${limit && `&limit=${limit}`}${artist && `&artist=${artist}`}${category && `&category=${category}`}`)
  if (result.data.error === 0) {
    return result.data.artists
  } else {
    return false
  }
}

const findOneService = async (username) => {
  const result = await axios.get(`${app.apiUrl}${PATH}artist/${username}`)
  if (result.data.error === 0) {
    return result.data.artist
  } else {
    return false
  }
}

export {
  SignUpService,
  SignInService,
  VerifyAccountService,
  VerifyAccountRepeatService,
  UserProfileService,
  UpdateProfileService,
  ResetPasswordService,
  findAllService,
  findOneService
}
