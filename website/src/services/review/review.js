import { app } from '../../configuration/app.config'
import axios from 'axios'
import { toast } from 'react-toastify'

const PATH = 'review/'

const createReviewService = async (name, rating, review, artworkId) => {

  var error = 0

  if (!name) { error++; toast.warn('Missing Name') }
  if (!rating) { error++; toast.warn('Missing Rating') }
  if (!review) { error++; toast.warn('Missing Review') }
  if (!artworkId) { error++; toast.danger('Failed, Error code: 1') }

  if (error == 0) {

    const result = await axios.post(`${app.apiUrl}${PATH}`,
    {name, rating, review, artworkId},
    {headers: {'x-access-token': localStorage.getItem('token')}})
    if (result.data.error === 0) {
      toast.success('Review, Successfully created')
      return true
    } else {
      toast.warn('Error while entering review')
      return false
    }
  }

}

const findArtworkReviewService = async (artworkId) => {

    const result = await axios.get(`${app.apiUrl}${PATH}${artworkId}`)
    if (result.data.error === 0) {
      return result.data.reviews
    } else {
      return false
    }

}

const findArtistReviewService = async (artistId) => {

    const result = await axios.get(`${app.apiUrl}${PATH}artist/${artistId}`)
    if (result.data.error === 0) {
      return result.data.reviews
    } else {
      return false
    }

}

const findAllReviewService = async (limit) => {

    const result = await axios.get(`${app.apiUrl}${PATH}?limit=${limit}`)
    if (result.data.error === 0) {
      return result.data.reviews
    } else {
      return false
    }

}

const findAllGivenReviewService = async (userId) => {

    const result = await axios.get(`${app.apiUrl}${PATH}user/${userId}`,
    {headers: {'x-access-token': localStorage.getItem('token')}})
    if (result.data.error === 0) {
      return result.data.reviews
    } else {
      return false
    }

}

const updateReviewService = async (rating, review, id) => {

    const result = await axios.put(`${app.apiUrl}${PATH}${id}`, {
      rating, review
    }, {headers: {'x-access-token': localStorage.getItem('token')}})
    if (result.data.error === 0) {
      toast.success('Review, Successfully updated')
      return true
    } else {
      return false
    }

}



export {
  createReviewService,
  findArtworkReviewService,
  findArtistReviewService,
  findAllReviewService,
  findAllGivenReviewService,
  updateReviewService
}
