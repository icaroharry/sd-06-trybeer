import React from 'react';
import { useHistory } from 'react-router-dom';
import bancoDeDados from '../pedidosPendentes';

function AdminOrdersCard() {
  const route = useHistory();
  return (
    <div>
      { bancoDeDados.map((e, i) => (
        <button
          key={ e.id }
          className="order-card"
          type="button"
          onClick={ () => route.push(`/admin/orders/${e.id}`) }
        >
          <h1 data-testid={ `${i}-order-number` }>{ `Pedido ${e.delivery_number}` }</h1>
          <p data-testid={ `${i}-order-address` }>{ e.delivery_address }</p>
          <span data-testid={ `${i}-order-total-value` }>{`R$ ${e.total_price}` }</span>
          <span data-testid={ `${i}-order-status` }>
            { e.status ? 'Pendente' : 'Entregue' }
          </span>
        </button>
      ))}
    </div>
  );
}

export default AdminOrdersCard;
