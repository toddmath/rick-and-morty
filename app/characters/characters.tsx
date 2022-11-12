"use client"

import { use, useState } from "react"
import { getCharacters } from "rickmortyapi"
import clsx from "clsx"
import Link from "next/link"

import { Pagination } from "../../components/Pagination"
import { makeQueryClient } from "../../utils/query-client"

// const queryClient: QueryClient = new Map()

// function makeQueryClient() {
//   const fetchMap = new Map<number, Promise<any>>()
//   return function queryClient<QueryResult>(
//     page: number,
//     query: () => Promise<QueryResult>
//   ): Promise<QueryResult> {
//     if (!fetchMap.has(page)) {
//       const fn = query()
//       fetchMap.set(page, fn)
//       return fn
//     }
//     return fetchMap.get(page)!
//   }
// }

const queryClient = makeQueryClient<
  number,
  Awaited<ReturnType<typeof getCharacters>>
>()

// const getCharPage = (page: number) => getCharacters({ page })

export default function Chars() {
  const [page, setPage] = useState(1)

  const {
    data: { info, results: chars },
  } = use(queryClient(page, () => getCharacters({ page })))

  return (
    <article className='space-y-20 w-full'>
      <ul className='w-full grid grid-cols-[repeat(auto-fit,minmax(min(100%,30ch),1fr))] gap-6 list-none'>
        {chars?.map(char => (
          <li key={char.id} className={clsx("w-full card card-bordered shadow-xl")}>
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
        page={page}
        next={() => setPage(c => (info && info.pages > page ? c + 1 : c))}
        prev={page > 1 ? () => setPage(c => c - 1) : null}
      />
    </article>
  )
}
