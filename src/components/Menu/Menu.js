import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxArchive,
  faPeopleGroup,
  faRightFromBracket,
  faStore,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import style from './Menu.module.css';

const Menu = () => {
  //This handle the logoug message
  const handleLogout = () => {
    Swal.fire({
      title: '¿Deseas cerrar la sesión?',
      text: 'Seras redirigido a la patalla de inicio de sesión',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Adios!', 'Sesión finalizada', 'success');
      }
    });
  };

  return (
    <div className={style.container}>
      <div className={style.logoC}>
        <h1 className={style.logo}>Logo</h1>
      </div>
      <div>
        <a href='/' className={`${style.link} ${style.selected}`}>
          <FontAwesomeIcon icon={faStore} />
          <p>Almacenes</p>
        </a>

        <a href='/' className={style.link}>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <p>Clientes</p>
        </a>

        <a href='/' className={style.link}>
          <FontAwesomeIcon icon={faTruck} />
          <p>Camiones</p>
        </a>

        <a href='/' className={style.link}>
          <FontAwesomeIcon icon={faBoxArchive} />
          <p>Envases</p>
        </a>
      </div>
      <div className={style.logoutC}>
        <div className={style.logout} onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p>Cerrar sesión</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
