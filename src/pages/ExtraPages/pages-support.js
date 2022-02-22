import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

export class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.activateAuthLayout();
  }
  render() {
    return (
      <div className=" m-5 d-flex justify-content-center" >
        <div className="col-md-10 card " >
          <h4>
            <i class="fa fa-camera-retro fa-lg mr-2"></i>Ticket List
          </h4>
          <div>
            <a className="btn btn-sm btn-success float-right m-10" href="#">
              Add New Ticket
            </a>
            <div className="float-left m-5">
              show{" "}
              <select className="m-2">
                <option type="number">10</option>
                <option type="number">25</option>
                <option type="number">50</option>
                <option type="number">100</option>
              </select>
              entries
            </div>
          </div>
          <div>
            <label className="float-right m-2">Search</label>
            <input className="float-right "></input>
          </div>
          <div style={{ border: "1px solid black;" }}>
            <table className="border table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>Last Reply</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Title</td>
                <td>Priority</td>
                <td>Status</td>
                <td>Category</td>
                <td>Last Reply</td>
                <td>Actions</td>
              </tr>
            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { activateAuthLayout })(Support));
