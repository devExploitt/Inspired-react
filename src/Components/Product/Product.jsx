import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const.js';
import { ReactComponent as Like } from '../../assets/heart.svg';
import s from './Product.module.scss';
import { ColorList } from '../ColorList/ColorList.jsx';

export const Product = ({ id, pic, title, price, colors, description }) => (
    <article className={s.product}>
        <NavLink to={`/product/${id}`} className={s.link} >
            <img 
            className={s.image} 
            src={`${API_URL}${pic}`} 
            alt={`${title} ${description}`} />
            <h3 className={s.title}>{title}</h3>
        </NavLink>

        <div className={s.row}>
            <p className={s.price}>руб {price}</p>

            <button>
                <Like />
            </button>
        </div>
        <ColorList colors={colors} />
    </article>
)
