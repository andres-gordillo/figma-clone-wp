import { useState } from 'react';
import { Container, Group, Burger, CloseButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './simpleHeader.module.css';
import {
    IconBrandSupernova,
    IconFrame,
    IconLetterT,
    IconPointer,
    IconSquare
} from '@tabler/icons-react';

const links = [
    { label: 'brand', icon: <IconBrandSupernova /> },
    { label: 'pointer', icon: <IconPointer /> },
    { label: 'frame', icon: <IconFrame /> },
    { label: 'square', icon: <IconSquare /> },
    { link: 'text', icon: <IconLetterT /> },
];

export function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <CloseButton  className={classes.navItems} icon={link.icon}>

        </CloseButton>
        // <a
        //   key={link.label}
        //   href={link.link}
        //   className={classes.link}
        //   data-active={active === link.link || undefined}
        //   onClick={(event) => {
        //     event.preventDefault();
        //     setActive(link.link);
        //   }}
        // >
        //   {link.label}
        // </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}