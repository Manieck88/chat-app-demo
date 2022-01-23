import { RouteElement } from '../types/routes.types';
import { House, Pencil, Person, ChatDots, Files, Gear } from 'react-bootstrap-icons';

const routes: RouteElement[] = [
    {
        link: 'home',
        Icon: House,
        disabled: true,
    },
    {
        link: 'edit',
        Icon: Pencil,
        disabled: true,
    },
    {
        link: 'user',
        Icon: Person,
        disabled: true,
    },
    {
        link: 'chat',
        Icon: ChatDots,
        disabled: false,
    },
    {
        link: 'files',
        Icon: Files,
        disabled: true,
    },
    {
        link: 'settings',
        Icon: Gear,
        disabled: true,
    },
];

export default routes;
