import { app } from '../../configuration/app.config'
import axios from 'axios'
import { toast } from 'react-toastify'

const PATH = 'category/'

const createCategoryService = (category) => {

  var error = 0;
  if (!category) { error++; toast.warn('Missing Category') }

  if (error == 0) {
    axios.post(`${app.apiUrl}${PATH}`, {
      category
    }, {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(res => {
      (res.data.error === 0) && toast.success('Category, Successfully created');
      (res.data.error === 1) && toast.warn('Error while creating category')
    }).catch(err => {
      toast.error('Error while creating')
    })
  }

}

const findAllCategoryService = async () => {

    const response = await axios({
      method: 'get',
      url: `${app.apiUrl}${PATH}`
    })
    return response.data

}

const deleteCategoryService = async (id) => {

  var error = 0;
  if (!id) { error++; toast.warn('Missing Id') }

  if (error == 0) {
    axios.delete(`${app.apiUrl}${PATH}/${id}`, {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(res => {
      (res.data.error === 0) && toast.success('Category, Successfully Delete');
      (res.data.error === 1) && toast.warn('Error while deleting category')
    }).catch(err => {
      toast.error('Error while deleting')
    })
  }

}

const editCategoryService = async (id, category) => {

  var error = 0;
  if (!id) { error++; toast.warn('Missing Id') }
  if (!category) { error++; toast.warn('Missing category') }

  if (error == 0) {
    axios.put(`${app.apiUrl}${PATH}`, {
      id, category
    }, {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(res => {
      (res.data.error === 0) && toast.success('Category, Successfully Updated');
      (res.data.error === 1) && toast.warn('Error while updating category')
    }).catch(err => {
      toast.error('Error while updating')
    })
  }

}


export {
  createCategoryService,
  findAllCategoryService,
  deleteCategoryService,
  editCategoryService
}
