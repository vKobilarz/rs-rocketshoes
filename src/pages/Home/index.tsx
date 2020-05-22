import React, { FC, useState, useEffect } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import IProduct from '../../interfaces/Product';
import { getItems } from '../../services/modules/product';
import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

interface Props {}

const Home: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getItems();

      setProducts(
        products.map((product) => ({
          ...product,
          priceFormatted: formatPrice(Number(product.price)),
        }))
      );
    };

    fetchData();
  }, []);

  return (
    <ProductList>
      {products.map((product: IProduct) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
