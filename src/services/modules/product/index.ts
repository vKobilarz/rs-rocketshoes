import api from '../../api';

import IProduct from '../../../interfaces/Product';

export async function getItems(): Promise<IProduct[]> {
  const { data } = await api.get('products');

  return data;
}
