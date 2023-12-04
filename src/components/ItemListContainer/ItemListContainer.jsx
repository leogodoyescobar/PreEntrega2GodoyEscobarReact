// import {useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export const ItemListContainer = ({greeting}) => {
    
    const {category} = useParams();
    const { products, isLoading } = useContext( ProductContext );
        

    const filterProductsCategory = (products, category) => {
        return category ? products.filter((product) => product.category === category) : products;
    };
        
    return (
        <>
        <div className=" text-gray-400 pt-5 "> {greeting} </div>
        { isLoading ? <h2>Cargando productos ..</h2> : <ItemList products={filterProductsCategory(products, category)} />}
        {/* { isLoading ? <h2>Cargando productos ..</h2> : <ItemList products={products} />} */}
        </>
    );
};
