import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

export class TicketAction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.activateAuthLayout();
  }
  render() {
    return (
      <div classNameName="m-5 d-flex justify-content-center">
        <div classNameName="col-md-9 card d-flex justify-content-center align-items-center">
          <div classNameName="col-md-8 m-2">
            <div classNameName="bg-info text-white ">
              <h4>
                <b classNameName="m-2">Demo Ticket for Attechment</b>
              </h4>
            </div>
            <div classNameName="panel panel-default">
              <div className="panel-body">
                <h4 className="">Ticket Details</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td classNameName="ticket-label-info">#</td>
                      <td>2</td>
                      <td className="ticket-label-info">Client</td>
                      <td>Kapil Karda</td>
                    </tr>
                    <tr>
                      <td className="ticket-label-info">Created</td>
                      <td>24-10-2020</td>
                      <td className="ticket-label-info">Priority</td>
                      <td>
                        <span className="label label-default">Low</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ticket-label-info">Last Updated</td>
                      <td>24-10-2020 09:58:47</td>
                      <td className="ticket-label-info">Category</td>
                      <td>Campaign issue</td>
                    </tr>
                    <tr>
                      <td className="ticket-label-info">Status</td>
                      <td>
                        <button
                          className="btn btn-danger btn-xs"
                          type="button"
                          id="status-button"
                        >
                          Closed
                        </button>
                      </td>
                      <td className="ticket-label-info">Closed Date</td>
                      <td>24-10-2020</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { activateAuthLayout })(TicketAction));
