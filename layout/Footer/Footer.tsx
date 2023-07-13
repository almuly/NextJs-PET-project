import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { Paragraph } from '../../components';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            <Paragraph size="medium">OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Paragraph>

            <a href="#">Пользовательское соглашение</a>

            <a href="#"> Политика конфиденциальности</a>
        </footer>
    );
};
