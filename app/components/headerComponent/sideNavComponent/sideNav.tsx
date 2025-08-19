import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
} from '@tabler/icons-react';
import classes from './sideNav.module.css';

const data = [
   {}
];

const navItems = [
    { label: 'Layers', },
    { label: 'Assets', }
];

export function NavbarSimple() {
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <div></div>
    ));
    const items = navItems.map((link) => (
        <a
            key={link.label}
            className={classes.link}
            data-active={undefined}
            onClick={(event) => {
                event.preventDefault();
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header}>
                    {items}
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}