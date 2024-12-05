export enum UserRolesEnum {
    client = 'client',
    driver = 'driver',
    admin = 'admin',
}
export type CarType = {
    make: string;
    model: string;
    year: number;
    color: string;
};

export type User = {
    email: string;
    password: string;
    keepMeLoggedIn: boolean;
    firstName: string;
    lastName: string;
    role: UserRolesEnum;
    car?: CarType;
};

export type UserEmail = {
    email: string;
};
export type LoginUserData = {
    email: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
    expirationTime: number;
    refreshToken: string;
};
