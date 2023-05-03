import React, { Component } from "react";

export default class ShowInfo extends Component {
  render() {
    let { spCT } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
            style={{
              minHeight:650,
              minWidth:550,
            }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img src={spCT.image} alt="" />
                <h3>Thông Số</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <td>{spCT.id}</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>{spCT.name}</td>
                    </tr>
                    <tr>
                      <th>Alias</th>
                      <td>{spCT.alias}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>{spCT.price}</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{spCT.description}</td>
                    </tr>
                    <tr>
                      <th>ShortDescription</th>
                      <td>{spCT.shortDescription}</td>
                    </tr>
                    <tr>
                      <th>Quantity</th>
                      <td>{spCT.quantity}</td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
               Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
