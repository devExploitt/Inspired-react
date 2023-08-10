import { useSelector } from "react-redux";
import s from './Goods.module.scss';
import { Product } from '../Product/Product';
import { Container } from "../Layout/Container/Container";
import { Pagination } from "../Pagination/Pagination";
export const Goods = ({ title }) => {
    const { goodsList } = useSelector(state => state.goods);

    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>{title}</h2>
                <ul className={s.list}>
                    {goodsList.map((item) => (
                        <li key={item.id}>
                            <Product {...item} />
                        </li>
                    ))}
                </ul>
                <Pagination />
            </Container>
        </section>
    );
}