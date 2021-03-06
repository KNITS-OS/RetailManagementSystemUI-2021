import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import { SearchProduct } from "components/Product/SearchProduct";
  import { HeaderBasic } from "components/Headers/HeaderBasic.js"
  
  const Profile = () => {
    return (
      <>
      <HeaderBasic />

        {/* Page content */}
        <Container className="mt--7" fluid>
          <SearchProduct />
          <Row>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="6">
                      <h3 className="mb-0">Product</h3>
                    </Col>
                    <Col className="text-right" xs="3">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Edit product
                      </Button>
                    </Col>
                    <Col className="text-right" xs="3">
                      <Button
                        color="danger"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Deactivate product
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Product information
                    </h6>
                    <div className="pl-lg-4">
                    <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product-id"
                            >
                              Product ID
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product-id"
                              placeholder="Product ID"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_name"
                            >
                              Product name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_name"
                              placeholder="Product name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_brand"
                            >
                              Brand
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_brand"
                              placeholder="Brand"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Prices */}
                    <h6 className="heading-small text-muted mb-4">
                      Prices
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_cost_price"
                            >
                              Cost price
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_cost_price"
                              placeholder="Cost price"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_retail_price"
                            >
                              Retail price
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_retail_price"
                              placeholder="Retail price"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Product details */}
                    <h6 className="heading-small text-muted mb-4">
                      Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_category"
                            >
                              Category
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_category"
                              placeholder="Category"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-stock"
                            >
                              Stock
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-stock"
                              placeholder="Stock"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Inventory */}
                    <h6 className="heading-small text-muted mb-4">
                      Inventory
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-minimum_stock_level"
                            >
                              Minimum stock level
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-minimum_stock_level"
                              placeholder="Minimum stock level"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-reorder_quantity"
                            >
                              Reorder quantity
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_reorder_quantity"
                              placeholder="Reorder quantity"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>

                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Profile;
  