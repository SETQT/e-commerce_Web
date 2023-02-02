import React from 'react'
import { useState, useEffect } from 'react'
import ProductService from '../../service/ProductService'

import "./style.css"

const Data = {

}
function ListProduct() {

    const [dataProduct, setDataProduct] = useState([])
    useEffect(() => {

        ProductService.getAllProduct().then((response) => {
            console.log(response.data.products);
            setDataProduct(response.data.products);
        })
            .catch((err) => { });

        // }, [dataProduct])
    }, [])
    return (
        <>
            <div className="listItem">

                {
                    dataProduct?.map((item, index) => {
                        return (

                            <div className="item" key={index}>
                                <span className='itemTitle'>{item.title}</span>
                                <img src={item.images[0]} alt="" />
                            </div>
                        )
                    })}


            </div>
        </>
    )
}

export default ListProduct
