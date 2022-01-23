import User from './user.types';

export interface GetUsersResponse {
    info: {
        age: number;
        results: number;
        seed: string;
        version: string;
    };
    results: User[];
}
