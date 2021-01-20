import React from "react";
import Product from "../Product/Product";

const HomeProducts = () => {
  const pro = [1, 2, 3, 4, 5, 6];

  return (
    <section id="aa-product">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="aa-product-area">
                <div className="aa-product-inner">
                  {/*start prduct navigation*/}
                  <ul className="nav nav-tabs aa-products-tab">
                    <li className="active">
                      <a href="#men" data-toggle="tab">
                        Men
                      </a>
                    </li>
                    <li>
                      <a href="#women" data-toggle="tab">
                        Women
                      </a>
                    </li>
                    <li>
                      <a href="#sports" data-toggle="tab">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a href="#electronics" data-toggle="tab">
                        Electronics
                      </a>
                    </li>
                  </ul>

                  {/* Products from sub categories */}
                  <div className="tab-content">
                    {/*Start men product category*/}
                    <div className="tab-pane fade in active" id="men">
                      <ul className="aa-product-catg">
                        {/*start single product item*/}
                        {pro.map((p) => (
                          <Product />
                        ))}
                      </ul>

                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right"></span>
                      </a>
                    </div>

                    {/*women product category*/}
                    <div className="tab-pane fade" id="women">
                      <ul className="aa-product-catg">
                        {/*start single product item*/}
                        {pro.map((p) => (
                          <Product />
                        ))}
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right"></span>
                      </a>
                    </div>

                    {/*sports product category */}
                    <div className="tab-pane fade" id="sports">
                      <ul className="aa-product-catg">
                        {/*start single product item*/}
                        {pro.map((p) => (
                          <Product />
                        ))}
                      </ul>

                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right"></span>
                      </a>
                    </div>

                    {/*sports product category */}
                    <div className="tab-pane fade" id="electronics">
                      <ul className="aa-product-catg">
                        {/*start single product item*/}
                        {pro.map((p) => (
                          <Product />
                        ))}
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
