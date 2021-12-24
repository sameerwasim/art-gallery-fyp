import React, { Component } from 'react'
import Axios from 'axios'

import ReactTable from "react-table-v6"
import 'react-table-v6/react-table.css'

import {Button, Form, Modal} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Manage extends Component {

  render() {

    const columns = [
      { Header: 'Country', accessor: 'country' },
      { Header: 'City', accessor: 'city' },
      { Header: 'Area', accessor: 'area' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Actions', accessor:'id',
        Cell: ({row}) => (
          <div>
             <FontAwesomeIcon className="text-danger mr-3" icon={faTrash} onClick={() => this.delete(row.id)} />
             <FontAwesomeIcon className="text-info ml-3" onClick={() => this.edit(row.id)} icon={faPencilAlt} />
          </div>
        )
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
               data={this.state.filteredData && this.state.filteredData.length ? this.state.filteredData : this.state.data}
               columns={columns}
               defaultPageSize={10}
            />
          </div>
        </div>
        <ToastContainer autoClose={3000} />
      </>
    );

  }

}
