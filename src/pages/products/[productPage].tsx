import { Button, Spin } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ButtonGroup from 'antd/lib/button/button-group';
import ProductListing from './ProductListing';

const numberOfPages = 5;
const locationUrl = `http://localhost:3000`
const ProductsPage = () => {
    const router = useRouter()
    const { productPage } = router.query;
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState<string>(productPage?.toString() || "1");

    useEffect(() => {
        if (currentPage) {
            fetch(`${locationUrl}/api/products?page=${currentPage}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data.results)
                })
                .catch(error => console.log(error))
                .finally(() => setIsLoading(false))
        }
    }, [currentPage])

    useEffect(() => {
        if (productPage) {
            setCurrentPage(productPage.toString())
        }
    }, [productPage])


    return <Layout>
        {currentPage &&
            <>
                {!isLoading &&
                    <>
                        {
                            products.length > 0 &&
                            <ProductListing products={products} />
                        }
                        <ButtonGroup className="pagination-group">
                            <Link href={`/products/${(parseInt(currentPage) - 1)}`}>
                                <Button disabled={currentPage === "1" ? true : false}
                                    onClick={() => setCurrentPage(`${parseInt(currentPage) - 1}`)} icon={<LeftOutlined />} />
                            </Link>
                            {[...Array(numberOfPages)].map(
                                (value: undefined, index: number) => (
                                    <Link key={`${(index + 1)}`} href={`/products/${(index + 1)}`}>
                                        <Button style={{ color: currentPage === `${index + 1}` ? "blue" : "black" }} onClick={() => setCurrentPage(`${index + 1}`)}>
                                            {index + 1}
                                        </Button>
                                    </Link>
                                )
                            )}
                            <Link href={`/products/${(parseInt(currentPage) + 1)}`}>
                                <Button disabled={currentPage === "5" ? true : false}
                                    onClick={() => setCurrentPage(`${parseInt(currentPage) + 1}`)} icon={<RightOutlined />} />
                            </Link>
                        </ButtonGroup>
                    </>
                }
                {isLoading &&
                    <div className="is-loading-spinner">
                        <Spin tip="Loading..." />
                    </div>
                }
            </>}
    </Layout >

}
export default ProductsPage