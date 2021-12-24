import { app } from '../../configuration/app.config'
import axios from 'axios'
import { toast } from 'react-toastify'

const PATH = 'artwork/'

const createArtworkService = async (title, category, description, size, price, images) => {

  var error = 0;
  if (!title) { error++; toast.warn('Missing Title') }
  if (!category) { error++; toast.warn('Missing Category') }
  if (!description) { error++; toast.warn('Missing Description') }
  if (!size) { error++; toast.warn('Missing Size') }
  if (!price) { error++; toast.warn('Missing Price') }
  if (images.length === 0) { error++; toast.warn('Missing Images') }

  if (error == 0) {

    var formData = new FormData()
    formData.append('title', title)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('size', size)
    formData.append('price', price)
    for (var i = 0; i < images.length; i++) {
      formData.append(`images`, images[i])
    }

    const result = await axios.post(`${app.apiUrl}${PATH}`, formData,
    {headers: {'x-access-token': localStorage.getItem('token')}})
    if (result.data.error === 0) {
      toast.success('Artwork, Successfully created')
      return true
    } else {
      toast.warn('Error while creating artwork')
      return false
    }
  }

}

const editArtworkService = async (id, title, category, description, size, price, images) => {

  var error = 0;
  if (!title) { error++; toast.warn('Missing Title') }
  if (!category) { error++; toast.warn('Missing Category') }
  if (!description) { error++; toast.warn('Missing Description') }
  if (!size) { error++; toast.warn('Missing Size') }
  if (!price) { error++; toast.warn('Missing Price') }
  if (images.length === 0) { error++; toast.warn('Missing Images') }

  if (error == 0) {

    var formData = new FormData()
    formData.append('id', id)
    formData.append('title', title)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('size', size)
    formData.append('price', price)
    for (var i = 0; i < images.length; i++) {
      formData.append(`images`, images[i])
    }

    const result = await axios.put(`${app.apiUrl}${PATH}`, formData,
    {headers: {'x-access-token': localStorage.getItem('token')}})
    if (result.data.error === 0) {
      toast.success('Artwork, Successfully updated')
      return true
    } else {
      toast.warn('Error while updating artwork')
      return false
    }
  }

}

const findArtistArtworksService = async (id) => {

  var error = 0;
  if (!id) { error++; }

  if (error == 0) {
    const result = await axios.get(`${app.apiUrl}${PATH}artist/${id}`)
    if (result.data.error === 0) {
      return result.data.artworks
    } else {
      toast.warn('Error while fetching artist artworks')
    }
  }

}

const findArtworksService = async (limit, title = '', artist = '', category = '') => {

    const result = await axios.get(`${app.apiUrl}${PATH}?${limit && `&limit=${limit}`}${title && `&title=${title}`}${artist && `&artist=${artist}`}${category && `&category=${category}`}`)
    if (result.data.error === 0) {
      return result.data.artworks
    } else {
      toast.warn('Error while fetching artworks')
    }

}

const findOneArtworkService = async (id) => {

    const result = await axios.get(`${app.apiUrl}${PATH}${id}`)
    if (result.data.error === 0) {
      return result.data.artwork
    } else {
      toast.warn('Error while fetching artwork')
    }

}

export {
  createArtworkService,
  findArtistArtworksService,
  findArtworksService,
  findOneArtworkService,
  editArtworkService
}
