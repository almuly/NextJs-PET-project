import { Rating, Tag } from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Tag color={'gray'} size={'s'}>
                test
            </Tag>
            <Rating rating={3} isEditable />
            <Rating rating={2} />
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}
export default withLayout(Home);
