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

export class Reviews extends Component {

  constructor(props) {
  super(props);
    this.state = {
      review: [],
      filteredData: [],
      loading: true,
      searchInput: "",
    };
  }

  globalSearch = () => {
    let { searchInput, review } = this.state;
    let filteredData = review.filter((value) => {
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


  getReview() {
    Axios.get(`${process.env.REACT_APP_API_URL}review`)
    .then(res => {
      this.setState({review: res.data.reviews})
    })
  }

  componentDidMount() {
    this.getReview();
  }


  render() {

    const columns = [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Message",
        accessor: "message",
      },
    ];

    return (
      <>
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
                : this.state.review
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
