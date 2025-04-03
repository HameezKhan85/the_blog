import React from 'react'
import Link from 'next/link'

const socialLinks = [
  { name: 'Twitter', link: '/' },
  { name: 'LinkedIn', link: '/' },
  { name: 'Email', link: '/' },
  { name: 'RSS feed', link: '/' },
]

function Footer() {
  return (
    <>
      <footer className='py-5 lg:py-7'>
        <div className="container">
          <ul className='flex flex-wrap items-center gap-y-1 sm:gap-y-2 gap-x-2.5 sm:gap-x-3.5 [&_li]:text-sm sm:[&_li]:text-[calc(var(--text-sm)_+_2px)] text-heading'>
            <li>&copy; 2025</li>
            <li>
              <Link href={socialLinks[0].link}>{socialLinks[0].name}</Link>
            </li>
            <li>
              <Link href={socialLinks[1].link}>{socialLinks[1].name}</Link>
            </li>
            <li>
              <Link href={`mailto:${socialLinks[2].link}`}>{socialLinks[2].name}</Link>
            </li>
            <li>
              <Link href={socialLinks[3].link}>{socialLinks[3].name}</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer