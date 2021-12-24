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

  render() {

    return (
      <>
        <div className="card col-sm-12">
          <div className="card-body">
          <Form onSubmit={this.submit}>
            <div className="row">
              <div className="col-sm-12">
                <Form.Group controlId="city">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Category" required={true} />
                </Form.Group>
              </div>

              <div className="col-sm-6">
                <Form.Group controlId="submit">
                <Form.Label>Submit</Form.Label>
                <Button variant="primary" type="submit" size="lg" block>
                  Submit
                </Button>
                </Form.Group>
              </div>
            </div>
          </Form>

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
          </div>
        </div>
        <ToastContainer autoClose={3000} />
      </>
    );

  }

}
