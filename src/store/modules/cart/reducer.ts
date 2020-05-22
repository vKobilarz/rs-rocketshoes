import produce from 'immer';

import IProduct from '../../../interfaces/Product';

interface Action {
  type: string;
  product: IProduct;
}

export default function cart(state: IProduct[], action: Action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    default:
      return state || [];
  }
}
