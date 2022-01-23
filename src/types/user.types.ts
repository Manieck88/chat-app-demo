interface User {
    name: {
        first: string;
        last: string;
    };
    location: {
        city: string;
        country: string;
    };
    dob: {
        date: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}

export interface UserMessage {
    text: string;
    type: 'SENT' | 'RECEIVED';
    timeStamp: number;
}

export default User;
