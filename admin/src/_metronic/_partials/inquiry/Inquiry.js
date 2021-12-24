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

export class Inquiry extends Component {

  constructor(props) {
  super(props);
    this.state = {
      contact: [],
      filteredData: [],
      loading: true,
      searchInput: "",
    };
  }

  globalSearch = () => {
    let { searchInput, contact } = this.state;
    let filteredData = contact.filter((value) => {
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


  getContact() {
    Axios.get(`${process.env.REACT_APP_API_URL}contact`, {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(res => {
      this.setState({contact: res.data.contact})
    })
  }

  componentDidMount() {
    this.getContact();
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
                : this.state.contact
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
