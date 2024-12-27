import React from "react";

const MenuSidebar = () => {
  return (
    <div class="col-lg-3 order-lg-0 order-1">
      <div class="left-box wow fadeInUp">
        <div class="shop-left-sidebar">
          <div class="search-box">
            <div class="form-input position-relative">
              <input
                type="search"
                class="form-control search"
                id="search"
                placeholder="Search"
              />
              <i class="ri-search-line search-icon"></i>
            </div>
          </div>
          <div
            class="accordion sidebar-accordion"
            id="accordionPanelsStayOpenExample"
          >
            <div class="accordion-item">
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul
                    class="category-list custom-padding custom-height scroll-bar"
                    id="myDIV"
                  >
                    <li class="btnn">
                      <a href="#1">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Desserts</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="btnn">
                      <a href="#2">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Special Combos</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="btnn">
                      <a href="#3">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Sandwiches</span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li class="btnn">
                      <a href="#4">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Tocos</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="btnn">
                      <a href="#5">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Pasta</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="btnn">
                      <a href="#6">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Noodles</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="btnn">
                      <a href="#7">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Wrap</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="btnn">
                      <a href="#8">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Drinks</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="btnn">
                      <a href="#9">
                        <div class="form-check ps-0 m-0 category-list-box">
                          <div class="form-check-label">
                            <span class="name">Main Course</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
