import clsx from "clsx"
import { getCharacters } from "rickmortyapi"
// import Link from "next/link"

import { DataViewer } from 'components/DataViewer'

type CharacterStatus = 'Dead' | 'Alive' | 'unknown'
type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown'
interface CharacterFilter {
	name?: string
	type?: string
	species?: string
	status?: CharacterStatus
	gender?: CharacterGender
	page?: number
}

const characterStatus = ['Dead', 'Alive', 'unknown'] as const
const characterGender = ['Female', 'Male', 'Genderless', 'unknown'] as const

export default async function CharactersLayout({ children }: Props.Layout) {
	const { data } = await getCharacters()
	const { results: chars } = data
	// const { info, results: chars } = data
	// console.log({ info, Nresults: chars.length })

	return (
		<div
			className={clsx(
				'relative w-full'
				// "grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]"
			)}
		>
			<div className="row-span-2 space-y-20 px-6 py-0 container mx-auto lg:max-w-5xl relative">
				{children}
				<DataViewer data={data} />
			</div>
		</div>
	)
}

/*
<aside className='w-fit m-0 row-span-1'>
	<ul className='menu bg-base-200 w-56 p-2 rounded-box overflow-y-auto'>
		<li className='menu-title'>
			<span>Status</span>
		</li>
		{characterStatus.map(status => (
			<li key={status}>
				<Link href={`/characters/${status}`}>{status}</Link>
			</li>
		))}

		<li className='menu-title'>
			<span>Gender</span>
		</li>
		{characterGender.map(gender => (
			<li key={gender}>
				<Link href={`/characters/${gender}`}>{gender}</Link>
			</li>
		))}
	</ul>
</aside>
*/

/*
<li className='menu-title'>
	<span>Characters</span>
</li>
{chars?.map(char => (
	<li key={char.id}>
		<Link
			href={`/characters/${encodeURIComponent(char.id)}`}
			className={clsx("")}
		>
			{char.name}
		</Link>
	</li>
))}
*/
