import React from "react";

const OpenTiming = () => {
  return (
    <div class="col-lg-4">
      <div class="col-md-12 col-12">
        <div class="card">
          <div class="card-header">
            <ul
              class="nav nav-pills restaurant-tab tab-style2 w-100 border-0 m-0 mb-3"
              id="Tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link f-14 active"
                  id="pill-opening-time"
                  data-bs-toggle="pill"
                  data-bs-target="#opening-time"
                  aria-selected="true"
                  role="tab"
                >
                  <i
                    class="fa fa-clock-o"
                    style={{ color: "#000 !important" }}
                  ></i>{" "}
                  Opening Times
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link f-14"
                  id="pill-delivery-fee"
                  data-bs-toggle="pill"
                  data-bs-target="#delivery-fee"
                  aria-selected="false"
                  role="tab"
                  tabindex="-1"
                >
                  <img
                    src="assets/images/deliveryfee.png"
                    style={{ width: "20px" }}
                  />{" "}
                  Delivery Fee
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content restaurant-content" id="TabContent">
              <div
                class="tab-pane fade show active"
                id="opening-time"
                role="tabpanel"
                aria-labelledby="pill-opening-time"
              >
                <div class="row g-lg-4 g-3">
                  <div class="col-lg-12">
                    <table class="table mt-2 f-14">
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>12:00 - 23:00 </td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>12:00 - 23:00 </td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>14:00 - 02:00 </td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>12:00 - 23:00 </td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>12:00 - 23:00 </td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>12:00 - 02:00 </td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>12:00 - 23:00 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="delivery-fee"
                role="tabpanel"
                aria-labelledby="pill-delivery-fee"
              >
                <div class="row g-lg-4 g-3">
                  <div class="col-lg-12">
                    <table class="table mt-2 text-center f-14">
                      <thead>
                        <tr>
                          <td>Postcode </td>
                          <td>Minimum Order</td>
                          <td>Delivery Fee</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>HP12</td>
                          <td>$10.00 </td>
                          <td>$0.99</td>
                        </tr>
                        <tr>
                          <td>HP13</td>
                          <td>$12.00 </td>
                          <td>$1.99</td>
                        </tr>
                        <tr>
                          <td>HP14</td>
                          <td>$15.00 </td>
                          <td>$2.99</td>
                        </tr>
                        <tr>
                          <td>HP15</td>
                          <td>$20.00 </td>
                          <td>$3.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenTiming;
