import { RootState } from './../store/index';

export const storeMock: RootState = {
    users: {
        loading: 'complete',
        users: [
            {
                name: {
                    first: 'Herma',
                    last: 'Hauptmann',
                },
                location: {
                    city: 'Jerichower Land',
                    country: 'Germany',
                },
                dob: {
                    date: '1964-06-23T13:15:46.567Z',
                },
                phone: '0565-9883033',
                picture: {
                    large: 'https://randomuser.me/api/portraits/women/60.jpg',
                    medium: 'https://randomuser.me/api/portraits/med/women/60.jpg',
                    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg',
                },
                nat: 'DE',
            },
        ],
        activeUser: {
            name: {
                first: 'Herma',
                last: 'Hauptmann',
            },
            location: {
                city: 'Jerichower Land',
                country: 'Germany',
            },
            dob: {
                date: '1964-06-23T13:15:46.567Z',
            },
            phone: '0565-9883033',
            picture: {
                large: 'https://randomuser.me/api/portraits/women/60.jpg',
                medium: 'https://randomuser.me/api/portraits/med/women/60.jpg',
                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg',
            },
            nat: 'DE',
        },
    },
    conversations: {
        ids: ['0565-9883033'],
        entities: {
            '0565-9883033': {
                id: '0565-9883033',
                messages: [],
            },
        },
    },
};
