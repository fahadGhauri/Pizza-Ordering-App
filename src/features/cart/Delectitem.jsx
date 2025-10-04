import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { delItem } from './cartSlice';

function Delectitem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(delItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default Delectitem;
