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
	firstName: string
	lastName: string
	role: UserRolesType
	car?: CarType
}
