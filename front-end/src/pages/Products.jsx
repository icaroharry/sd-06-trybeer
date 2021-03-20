import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card';
import ShowCart from '../components/ShowCart';

import { getProducts } from '../api/index';
import { tokenExists } from '../services/index';

function Products() {
  const [products, setProducts] = useState(false);
  const history = useHistory();

  useEffect(() => {
    tokenExists(history);
    getProducts(setProducts);
  }, [history]);

  return (
    <div>
      <ControllerHeader />
      { products && products.map((product) => <Card key={ product.id } product={ product } />) }
      <button type="button" onClick={ () => console.log(products) }>Console products</button>
      <ShowCart />
    </div>
  );
}

export default Products;
