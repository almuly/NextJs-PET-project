import { Button, HTag, Paragraph, Tag } from '../components';

export default function Home(): JSX.Element {
    return (
        <div>
            <HTag tag="h1">Test</HTag>
            <HTag tag="h2">Test</HTag>
            <HTag tag="h3">Test</HTag>
            <Button appearance="ghost" arrow="right">
                Test
            </Button>
            <Button appearance="primary" arrow="down">
                Test
            </Button>
            <Button appearance="primary" arrow="right">
                Test
            </Button>
            <Paragraph size="small">
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias, amet aspernatur at eum
                fugiat id ipsam iste libero maxime mollitia obcaecati, optio perferendis quaerat recusandae
                reprehenderit similique voluptatibus.
            </Paragraph>

            <Paragraph size="medium">
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias, amet aspernatur at eum
                fugiat id ipsam iste libero maxime mollitia obcaecati, optio perferendis quaerat recusandae
                reprehenderit similique voluptatibus.
            </Paragraph>
            <Paragraph size="main">
                lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias, amet aspernatur at eum
                fugiat id ipsam iste libero maxime mollitia obcaecati, optio perferendis quaerat recusandae
                reprehenderit similique voluptatibus.
            </Paragraph>
            <Tag color={'red'} size={'m'}>
                test
            </Tag>
            <Tag color={'red'} size={'s'}>
                test
            </Tag>
            <Tag color={'gray'} size={'m'}>
                test
            </Tag>
            <Tag color={'gray'} size={'s'}>
                test
            </Tag>
            <Tag color={'primary'} size={'s'}>
                test
            </Tag>
            <Tag color={'primary'} size={'m'}>
                test
            </Tag>
            <Tag color={'ghost'} size={'s'}>
                test
            </Tag>
            <Tag>test</Tag>
        </div>
    );
}
