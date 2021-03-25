import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import TopBar from '../components/TopBar';
import { getOrderDetails } from '../services/orders';
import { formatDate } from '../utils/index';
import parseCurrency from '../utils/parseCurrencyToBRL';

function DetailsOrder() {
  const [orderDetails, setOrderDetails] = useState([]);

  const url = window.location.href.replace('3000', '3001');

  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');

    getOrderDetails(url).then((response) => setOrderDetails(response));
  }, []);

  return !orderDetails ? <h1>Loading...</h1> : (
    <div>
      <TopBar name="Detalhes do Pedido" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <span data-testid="order-number">
        {`Pedido ${(orderDetails.map((order) => order.id))[0]}  `}
      </span>
      <span data-testid="order-date">
        {formatDate((orderDetails.map((order) => order.sale_date))[0])}
      </span>
      <ul>
        {(orderDetails.map((order, index) => (
          <li key={ index }>
            <span data-testid={ `${index}-product-qtd` }>
              { `${order.quantity}  ` }
            </span>
            <span data-testid={ `${index}-product-name` }>
              { ` ${order.name}  ` }
            </span>
            <span data-testid={ `${index}-product-total-value` }>
              { parseCurrency(`${(order.price * order.quantity).toFixed(2)}`) }
            </span>
          </li>)))}
      </ul>
      <span data-testid="order-total-value">
        Total:
        { orderDetails.map((order) => parseCurrency(order.total_price))[0] }
      </span>
    </div>
  );
}

export default DetailsOrder;
