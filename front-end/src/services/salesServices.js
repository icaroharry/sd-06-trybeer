const headerType = { 'Content-Type': 'application/json' };

const URL_SALES = 'http://localhost:3001/sales';

export const createNewSale = async (sale) => fetch(`${URL_SALES}`, {
  method: 'POST',
  headers: headerType,
  body: JSON.stringify(sale),
}).then((response) => response.json());

export const createNewProduct = async (product, saleId) => {
  fetch(`${URL_SALES}/${saleId}`, {
    method: 'POST',
    headers: headerType,
    body: JSON.stringify(product),
  }).then((response) => response.json());
};

export const allSales = async () => fetch(URL_SALES, {
  method: 'GET',
  headers: headerType,
}).then((response) => response.json());
