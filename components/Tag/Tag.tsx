import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ color = 'ghost', size = 's', href, className, children, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, styles[`${size}`], styles[`${color}`])} {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
