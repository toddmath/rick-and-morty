import Link from "next/link"
import clsx from "clsx"

type PaginationProps = {
	page: number | string
	next?: string | number | null
	prev?: string | number | null
}

// type PaginationProps = {
// 	page: number
// 	next: (() => void) | null
// 	prev: (() => void) | null
// }

export const Pagination: React.FC<PaginationProps> = ({ page, prev, next }) => {
	return (
		<div className="w-fit mx-auto mt-16">
			<div className="btn-group">
				{prev ? (
					<Link className={clsx('btn')} href={`/characters/${prev}`}>
						«
					</Link>
				) : (
					<button className="btn btn-disabled">«</button>
				)}
				<button className="btn btn-disabled">Page {page}</button>
				{next ? (
					<Link className={clsx('btn')} href={`/characters/${next}`}>
						»
					</Link>
				) : (
					<button className="btn btn-disabled">»</button>
				)}
			</div>
		</div>
	)
}
