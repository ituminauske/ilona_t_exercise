import { Row } from "antd";
import React from "react"
import { ProductResponse } from "../../types";
import Product from "./Product"

const ProductListing = (props : {products : ProductResponse[]} ) => {
    const {products} = props;
  
    return <div style={{ height: "80%" }} >
        <Row>
            {products && products.map(product => { 
                return  <Product isInCart={false} key={product.gtin} product={product} />
            })
            }
        </Row>       
    </div>

}


export default ProductListing;