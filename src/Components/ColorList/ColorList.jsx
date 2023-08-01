import { useSelector } from 'react-redux';
import s from './ColorList.module.scss';
import { Color } from './Color/Color';

export const ColorList = ({ colors }) => {
    console.log('color: ', colors);
    const { colorList } = useSelector(state => state.color);
    console.log('colorList: ', colorList);

    return (
        <ul className={s.colorList}>
            {colors.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <Color key ={id} color = {color?.code} check={!i} />
            })}
        </ul>
    )
}