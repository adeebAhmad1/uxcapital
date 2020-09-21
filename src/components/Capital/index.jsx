import React, { Component } from "react";
import "./capital.css";
class Capital extends Component {
  render() {
    return (
      <div className="capital">
        <div className="management_outer">
          <div className="management_inner">
            <div className="half">
              <div className="left_inner">
                <div className="left_heading">
                  <h2>CAPITAL EQUIPMENT FINANCE ADVANTAGES</h2>
                </div>
                <div className="left_subHeading">
                  <h2>Capital Equipment Finance</h2>
                </div>
                <div className="card">
                  <div className="card_img">
                    <img
                      src="http://uxcapital.asia/wp-content/uploads/2018/08/3-2.jpg"
                      alt=""
                    />
                    <div className="desc">
                      <h3>Preserve working capital</h3>
                      <p>
                        Corporate equipment acquisition financing or leasing
                        allows companies to take possession of equipment
                        quickly, while preserving working capital for other
                        strategic purposes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_img">
                    <img
                      src="http://uxcapital.asia/wp-content/uploads/2018/08/2-2.jpg"
                      alt=""
                    />
                    <div className="desc">
                      <h3>Leverage equity</h3>
                      <p>
                        With a secured loan, companies can take advantage of the
                        equity in their existing equipment, or use
                        newly-purchased equipment as collateral.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_img">
                    <img
                      src="http://uxcapital.asia/wp-content/uploads/2018/08/4-1.jpg"
                      alt=""
                    />
                    <div className="desc">
                      <h3>Reduce risk</h3>
                      <p>
                        Several structures help companies divest obsolescence
                        risk, and provide flexibility to match equipment needs
                        with business cycles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="half center">
              <div className="p10px center">
                <img
                  width="680"
                  height="453"
                  src="http://uxcapital.asia/wp-content/uploads/2018/08/Building-Homes-Cheaper-and-Faster-With-Construction-Loans.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Capital;
