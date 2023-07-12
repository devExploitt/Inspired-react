import { Container } from "../../Layout/Container/Container";
import s from '/src/Components/Footer/Footer.module.scss';
import cn from 'classnames';

export const Catalog = () =>(
    <Container className={s.container}>
        <div className={s.category}>
            <div className={cn(s.title,s.catogoryTitle)}>КАТАЛОГ</div>
            <div className={s.categoryList}>
                <p className={s.categorySubtitle}>Женщины</p>
                <div className={s.categorySublist}>
                    <a className={s.link}>Бюстгальтеры</a>
                    <a className={s.link}>Трусы</a>
                    <a className={s.link}>Носки</a>
                    <a className={s.link}>Халаты</a>
                    <a className={s.link}>Термобелье</a>
                    <a className={s.link}>Пижамы</a>
                </div>   
            </div>
            <div className={s.categoryList}>      
                <div className={s.categorySubtitle}>Мужчины</div>
                <div className={s.categorySublist}>
                    <a className={s.link}>Трусы</a>
                    <a className={s.link}>Носки</a>
                    <a className={s.link}>Халаты</a>
                    <a className={s.link}>Термобелье</a>
                </div>
            </div>
        </div>
    </Container>
)