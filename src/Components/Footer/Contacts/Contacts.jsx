import { Container } from "../../Layout/Container/Container";
import s from '/src/Components/Footer/Footer.module.scss';
import cn from 'classnames';


export const Contacts = () =>(
    <Container>
        <div className={s.social}>
            <div className={cn(s.socialTitle,s.title)}>Социальные сети</div>
            <div className={s.socialSubtitle}>Подписывайтесь на наши страницы:</div>
            <div className={s.socialList}>
                <a href="#" className={cn(s.link,s.linkFB)}>Facebook</a>
                <a href="#" className={cn(s.link,s.linkVK)}>VKontakte</a>
            </div>
        </div>
    </Container>
)