declare namespace Props {
	export type Layout = {
		children: React.ReactNode
	}
}

declare namespace Characters {
	export type ResponseInfo = {
		count: number
		pages: number
		next: string | null
		prev: string | null
	}

	export type Response = {
		info: ResInfo
		results: Chars
	}
	export interface Character {
		id: number
		name: string
		status: Status
		species: Species
		type: string
		gender: Gender
		origin: Location
		location: Location
		image: string
		episode: string[]
		url: string
		created: Date
	}

	export type Chars = Character[]

	export enum Gender {
		Female = 'Female',
		Male = 'Male',
		Unknown = 'unknown',
	}

	export interface Location {
		name: string
		url: string
	}

	export enum Species {
		Alien = 'Alien',
		Human = 'Human',
	}

	export enum Status {
		Alive = 'Alive',
		Dead = 'Dead',
		Unknown = 'unknown',
	}
}
