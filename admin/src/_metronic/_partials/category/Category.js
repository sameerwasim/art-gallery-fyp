import React, { Component } from 'react'
import Axios from 'axios'

import ReactTable from "react-table-v6"
import 'react-table-v6/react-table.css'

import {Button, Form, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Category extends Component {

  constructor(props) {
  super(props);
    this.state = {
      category: '',
      categories: [],
      filteredData: [],
      loading: true,
      searchInput: "",
    };
    this.submit = this.submit.bind(this)
    this.delete = this.delete.bind(this)
  }

  submit = () => {
    Axios.post(`${process.env.REACT_APP_API_URL}category`, { category: this.state.category },
    {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(res => {
      if (res.data.error === 0) {
        toast.success('Category Entered')
      } else {
        toast.warn('failed')
      }
    })
  }

  delete = ({id}) => {
    Axios.delete(`${process.env.REACT_APP_API_URL}category/${id}`,
    {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(res => {
      if (res.data.error === 0) {
        toast.success('Category Deleted')
        this.getCategories()
      } else {
        toast.warn('failed')
      }
    })
  }

  globalSearch = () => {
    let { searchInput, categories } = this.state;
    let filteredData = categories.filter((value) => {
      return (
        value.category.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    this.setState({ filteredData });
  };

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };


  getCategories() {
    Axios.get(`${process.env.REACT_APP_API_URL}category`)
    .then(res => {
      this.setState({categories: res.data.categories})
    })
  }

  componentDidMount() {
    this.getCategories();
  }


  render() {

    const columns = [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Category",
        accessor: "category",
      }
    ];

    return (
      <>
        <div className="card col-sm-12">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <Form.Group controlId="city">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" onChange={(e) => this.setState({category: e.target.value})}
                     placeholder="Category" required={true} />
                </Form.Group>
              </div>

              <div className="col-sm-6">
                <Form.Group controlId="submit">
                <Form.Label>Submit</Form.Label>
                <Button onClick={this.submit} variant="primary" type="buttom" size="lg" block>
                  Submit
                </Button>
                </Form.Group>
              </div>
            </div>

          </div>
        </div>

        <div className="card mt-2">
          <div className="card-body">
            <div className="my-3 ">
              <label>Search: </label>
              <input
                name="searchInput"
                onChange={this.handleChange}
                label="Search"
                className="ml-3"
              />
            </div>
            <ReactTable
              data={
                this.state.filteredData &&
                this.state.filteredData.length
                ? this.state.filteredData
                : this.state.categories
              }
              columns={columns}
              defaultPageSize={20}
            />
          </div>
        </div>
        <ToastContainer autoClose={3000} />
      </>
    );

  }

}
