import Link from "next/link"
import Image from "next/image"
import { getCharacters } from "rickmortyapi"
import clsx from "clsx"

import { Pagination } from "../../../components/Pagination"

// async function getCharacter(id: number) {
//   const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
//   const data: Promise<Characters.Character> = await res.json()
//   return data
// }

export default async function CharactersPage({
	params,
	searchParams,
}: {
	params: { page: string }
	searchParams: { id: string }
}) {
	const {
		data: { info, results: chars },
	} = await getCharacters({ page: Number(params.page) })
	// console.log({ chars })

	const currentPage = Number(params.page)

	return (
		<article className="w-full">
			<header className="flex items-center justify-center">
				<h1 className="text-5xl font-semibold mt-12">Characters</h1>
			</header>

			<ul
				className={clsx(
					'w-full list-none',
					'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
					// "grid grid-cols-[repeat(auto-fit,minmax(min(100%,30ch),1fr))] auto-rows-max gap-6"
				)}
			>
				{chars?.map(char => (
					<li key={char.id}>
						<section className="card aspect-square shadow-xl h-full isolate image-full rounded-box overflow-hidden">
							<figure className="object-cover w-full">
								<Image
									src={char.image}
									alt=""
									fill
									sizes="50vw"
									// width={512}
									// height={406}
									className="w-auto min-w-full"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">{char.name}</h2>
								{/* <p>{char.gender}</p> */}

								{/* <div className='stats shadow-lg'>
							<div className='stat'>
								<div className='stat-title'>Origin</div>
								<div className='stat-value text-2xl'>{char.origin.name}</div>
								<div className='stat-desc'>{char.created}</div>
							</div>
							<div className='stat'>
								<div className='stat-title'>Species</div>
								<div className='stat-value text-2xl'>{char.species}</div>
							</div>
						</div> */}

								<div className="card-actions">
									<Link href={`/characters/${char.id}`} className="btn">
										Details
									</Link>
								</div>
							</div>
						</section>
					</li>
				))}
			</ul>

			<Pagination
				page={params.page}
				next={info?.pages ?? 0 < currentPage ? currentPage + 1 : null}
				prev={currentPage > 1 ? currentPage - 1 : null}
			/>

			{/* <Pagination
				page={page}
				next={() => setPage(c => (info && info.pages > page ? c + 1 : c))}
				prev={page > 1 ? () => setPage(c => c - 1) : null}
			/> */}
		</article>
	)

	// return (
	//   <article className='container mx-auto card'>
	//     <div className='card-body'>
	//       <h1 className='card-title'>{char.name}</h1>
	//       <p className='text-base'>Status:&nbsp;{char.status}</p>
	//     </div>
	//   </article>
	// )
}
