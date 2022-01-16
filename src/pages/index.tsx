
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';


const HomePage = () => {

  return <Layout>
    <div className="welcome-text">
      Welcome to Qogita!
    </div>
    <Row style={{ alignItems: "center" }}>
      <Col span={12}>
        <Card
          style={{ height: "80%", maxHeight: "400px", maxWidth: "400px", marginLeft: "10%", marginTop: "30px", padding: "5px" }}
          cover={
            <img style={{ maxHeight: "300px", maxWidth: "300px", marginTop: "10%", marginLeft: "10%" }}
              alt="Products"
              src="https://uxwing.com/wp-content/themes/uxwing/download/30-logistics-shipping-delivery/search-product.png"
            />}
          actions={[
            <Link href="/products/[productPage]" as="/products/1">
              <div className="homepage-item-name">Explore Products</div>
            </Link>
          ]}  >
        </Card>
      </Col>
      <Col span={12}>
        <Card
          style={{ height: "80%", maxHeight: "400px", maxWidth: "400px", marginLeft: "10%", marginTop: "30px", padding: "5px" }}
          cover={
            <img style={{ maxHeight: "300px", maxWidth: "300px", marginTop: "10%", marginLeft: "10%" }}
              alt="Check Out"
              src="https://static.thenounproject.com/png/700396-200.png"
            />
          }
          actions={[
            <Link href="/cart">
              <div className="homepage-item-name">Check Out</div>
            </Link>

          ]}  >
        </Card>
      </Col>

    </Row>

  </Layout>

}



export default HomePage;
