import Link from "next/link"

const navLinks = [
  {
    label: "Characters",
    href: "/characters/1",
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Episodes",
    href: "/episodes",
  },
] as const

export default function Nav() {
  return (
    <nav className='navbar sticky top-0 bg-neutral/75 text-neutral-content backdrop-blur z-10'>
      <div className='navbar-start'>
        <Link href='/' className='btn btn-ghost normal-case text-2xl'>
          Rick & Morty
        </Link>
      </div>
      <div className='navbar-center'>
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className='btn btn-ghost normal-case text-xl'
          >
            {label}
          </Link>
        ))}
      </div>
      <div className='navbar-end'></div>
    </nav>
  )
}
