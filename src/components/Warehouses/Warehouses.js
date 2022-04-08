import { useState } from 'react';
import { warehouses } from '../../data/warehouses';
import WarehouseCard from '../Cards/WarehouseCard';
import style from './Warehouses.module.css';

const Warehouses = () => {
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.title_search}>
        <h2>Almacenes</h2>
        <input
          type='text'
          placeholder='Buscar almacen'
          className={style.search}
          onChange={handleChange}
          value={search}
        />
      </div>

      <div className={style.cards}>
        {warehouses
          .filter((warehouse) => {
            if (
              warehouse.name.toLocaleLowerCase().includes(search) ||
              warehouse.city.toLocaleLowerCase().includes(search) ||
              warehouse.area.toLocaleLowerCase().includes(search) ||
              warehouse.address.toLocaleLowerCase().includes(search)
            ) {
              return true;
            } else {
              return false;
            }
          })
          .map((warehouse) => {
            return <WarehouseCard data={warehouse} key={warehouse.id} />;
          })}
      </div>
    </div>
  );
};

export default Warehouses;
