import React from 'react'
import {
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,

} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    ChevronDownIcon,


} from "@heroicons/react/24/outline";
import { Prestamos } from './Prestamos';

const navListMenuItems = [
    {
        title: "Campañas Temporales",
        url: "/campanas/campanastemporales"
    },
    {
        title: "Casos Asignados",
        url: "/campanas/campanas"
    },
];

export const Campanas = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setIsMenuOpen(true),
        onMouseLeave: () => setIsMenuOpen(false),
    };

    const renderItems = navListMenuItems.map(({ title, url }) => (
        <a href={`${url}`} key={title}>
            <MenuItem>
                <Typography color="black" className="mb-1">
                    {title}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem
                            {...triggers}
                            className="hidden items-center gap-2 lg:flex lg:rounded-full"
                        >
                            <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Campañas{" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList
                    {...triggers}
                    className="hidden  grid-cols-4 gap-3 overflow-visible lg:grid"
                >
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Campañas{" "}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}
