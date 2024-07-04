export type UserRolesType = {
	client: 'client'
	driver: 'driver'
	admin: 'admin'
}
export type CarType = {
	make: string
	model: string
	year: number
	color: string
}

export type User = {
	email: string
	password: string
	keepMeLoggedIn: boolean
	firstName: string
	lastName: string
	role: UserRolesType
	car?: CarType
}

export type UserEmail = {
	email: string
}
export type LoginRequest = {
	email: string
	password: string
}

export type LoginResponse = {
	accessToken: string
	expirationTime: number
	refreshToken: string
}
