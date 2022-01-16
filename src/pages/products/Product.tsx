import { Card, Divider } from "antd";
import React, { useEffect, useState } from "react"
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { getCartValue, onCartValueChange } from "../../redux/cartValueReducer";
import { Product } from "../../types";
import { getCartContent, onCartContentChange } from "../../redux/cartContentReducer";

const ProductComponent = (props : {product : Product, isInCart :boolean}) => {
    
    const dispatch = useDispatch();    
    const currentValue = useSelector(getCartValue);
    const cartContent = useSelector(getCartContent)

    const [quantity, setQuntity] = useState(0);

    const { product, isInCart } = props;
    const { name, brandName, imageUrl, gtin, recommendedRetailPriceCurrency, recommendedRetailPrice } = product || {};
   
    const handleQuantityChange = (isAdded: boolean) => {
        if (isAdded) {
            setQuntity(quantity + 1)
            dispatch(onCartValueChange(currentValue + recommendedRetailPrice));
            dispatch(onCartContentChange({...cartContent, [gtin]: quantity + 1}));
        } else if (!isAdded && quantity > 0) {
            dispatch(onCartValueChange(currentValue - recommendedRetailPrice));
            setQuntity(quantity - 1)
            if (quantity > 0) {
                dispatch(onCartContentChange({...cartContent, [gtin]: quantity - 1}));
            }
            if (quantity - 1 === 0) {
                const newCartContent = _.omit((cartContent  || '{}'), gtin);
                dispatch(onCartContentChange(newCartContent));
            }
        }
    }

    useEffect(() => {
        if (cartContent[gtin]) {
            setQuntity(cartContent[gtin])
        }
    }, [])

    const handleDelete = () => {
        setQuntity(0);
        const newCartContent = _.omit(cartContent, gtin)
        dispatch(onCartValueChange(currentValue - (recommendedRetailPrice * quantity)));
        dispatch(onCartContentChange(newCartContent));
    }

    return <>{(!isInCart || (isInCart && quantity > 0)) &&
        <Card
            style={{ width: 200, marginTop: "30px", padding: "5px" }}
            cover={
                <div style={{ padding: "5px" }}>
                    <img style={{ height: 150, marginTop: 10, marginLeft: "10%" }}
                        alt={name}
                        src={imageUrl}
                    />
                    <Divider />
                    <div style={{ height: 100 }}>
                        <div className="item-name">{name}</div>
                        <div className="item-brand">{brandName}</div>
                        <div className = "item-price">{`${recommendedRetailPrice} ${recommendedRetailPriceCurrency}`}</div>
                    </div>
                </div>
            }
            actions={[
                <PlusOutlined onClick={() => handleQuantityChange(true)} key="add" />,
                <p>{quantity}</p>,
                <MinusOutlined onClick={() => handleQuantityChange(false)} style={{ color: (quantity < 1) ? "white" : "gray" }} key="remove" />,
                <DeleteOutlined onClick={() => handleDelete()} style={{ color: (quantity < 1) ? "white" : "gray" }} key="remove" />
            ]}  >
        </Card>
    }</>
}


export default ProductComponent;