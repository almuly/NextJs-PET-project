import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({ size = 'medium', className, children, ...props }: ParagraphProps): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, className, styles[`_${size}`])} {...props}>
            {children}
        </p>
    );
};
