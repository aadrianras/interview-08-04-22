
import Menu from '../Menu/Menu';
import Warehouses from '../Warehouses/Warehouses';
import style from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={style.container}>
            <Menu/>
            <Warehouses/>
        </div>
    );
}

export default Dashboard;