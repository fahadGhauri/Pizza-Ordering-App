import { useSelector } from 'react-redux';
import Button from '../../UI/Button';
import { formatCurrency } from '../../utils/helpers';
import Delectitem from './Delectitem';
import UpdateitemQuantity from './UpdateitemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentlyQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateitemQuantity
          pizzaId={pizzaId}
          currentlyQuantity={currentlyQuantity}
        />
        <Delectitem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
