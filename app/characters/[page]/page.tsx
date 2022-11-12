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
    <article className='w-full space-y-16'>
      <header className='flex items-center justify-center'>
        <h1 className='text-5xl font-semibold mt-12'>Characters</h1>
      </header>

      <ul
        className={clsx(
          "w-full list-none",
          "grid grid-cols-[repeat(auto-fit,minmax(min(100%,30ch),1fr))] gap-6"
          // "flex flex-wrap gap-6"
        )}
      >
        {chars?.map(char => (
          <li
            key={char.id}
            className={clsx("flex-1 w-full card card-bordered shadow-xl", {
              "image-full": char.image,
            })}
          >
            <figure>
              <Image
                src={char.image}
                alt=''
                fill
                className='w-full h-auto object-cover'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{char.name}</h2>
              <p>{char.gender}</p>

              <div className='card-actions'>
                <Link href={`/characters/${char.id}`} className='btn'>
                  Details
                </Link>
              </div>
            </div>
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
