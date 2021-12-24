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

export class Artist extends Component {

  constructor(props) {
  super(props);
    this.state = {
      artists: [],
      filteredData: [],
      loading: true,
      searchInput: "",
    };
  }

  globalSearch = () => {
    let { searchInput, artists } = this.state;
    let filteredData = artists.filter((value) => {
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


  getArtists() {
    Axios.get(`${process.env.REACT_APP_API_URL}auth/artists`)
    .then(res => {
      this.setState({artists: res.data.artists})
    })
  }

  componentDidMount() {
    this.getArtists();
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
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      }
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
                : this.state.artists
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
