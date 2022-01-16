import { Col, Empty, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { getCartContent } from '../../redux/cartContentReducer';
import { getCartValue } from '../../redux/cartValueReducer';
import { Product } from '../../types';
import ProductComponent from "../products/Product"

const locationUrl = `http://localhost:3000`

const CartPage = () => {
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const currentValue = useSelector(getCartValue);
  const cartContent = useSelector(getCartContent)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if (cartContent) {
      const promises = Object.keys(cartContent).map((productKey) => {
        return fetch(`${locationUrl}/api/products/${productKey}`)
      })
      Promise.all(promises).then((responses) => {
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      }).then(data => {
        setAddedProducts(data);
      }).catch(error => { console.log(error) })
        .finally(() => setIsLoading(false));
    }
  }, [])

  return <Layout>
    {addedProducts.length > 0 && !isLoading &&
      <Row>
        <Col span={20}>
          <Row>
            {addedProducts.map(product => {
              return <ProductComponent isInCart={true} key={product.gtin} product={product} />
            })}
          </Row>
        </Col>
        <Col span={4}>
          <div className="cart-value">Total : {currentValue>=0 ? currentValue.toFixed(2) : 0.00} EUR</div>
        </Col>
      </Row>
    }
    {isLoading &&
      <div className="is-loading-spinner">
        <Spin tip="Loading..." />
      </div>
    }
    {((addedProducts.length === 0 && !isLoading) || (currentValue<=0.001 && !isLoading)) &&
      <div className="empty-cart">
        <Empty
          image="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
          imageStyle={{
            height: 200,
          }}
          description={
            <span>
                Your Cart is Empty
            </span>
          }
        />
      </div>
    }
  </Layout>
}

export default CartPage;
