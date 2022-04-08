import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import style from './WarehouseCard.module.css';

const WarehouseCard = ({ data }) => {
  const { id, name, address, city, area } = data;

  const handleDelete = () => {
    Swal.fire({
      title: '¿Deseas eliminar este almacén?',
      text: 'No es posible revertir esta decisión',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Eliminado`, `El almacen ${name} fue eliminado`, 'success');
      }
    });
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div>
          <p className={style.id}># {id}</p>
        </div>
        <h2 className={style.name}>{name}</h2>
        <div>
          <p>
            <b>Dirección:</b> {address}
          </p>
        </div>
        <div className={style.city_area}>
          <p>{city}</p>
          <p>{area} mts2</p>
        </div>
      </div>

      <div className={style.buttons}>
        <div className={style.button}>
          <FontAwesomeIcon icon={faPenToSquare} />
          <p>Editar</p>
        </div>
        <div className={style.button} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
          <p>Eliminar</p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseCard;
