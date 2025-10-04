import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const memu = useLoaderData();
  // console.log(memu);
  return (
    <ul className="divide-y divide-stone-200 px-4">
      {memu.map((piza) => (
        <MenuItem id={piza.id} key={piza.id} pizza={piza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
