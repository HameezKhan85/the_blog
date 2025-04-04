import React from 'react'
import siteConfig from '@/config/site'
import Link from 'next/link'

function Footer() {
  const socialLinks = siteConfig.socialLinks;

  return (
    <>
      <footer className='py-5 lg:py-7'>
        <div className="container">
          <ul className='flex flex-wrap items-center gap-y-1 sm:gap-y-2 gap-x-2.5 sm:gap-x-3.5 [&_li]:text-sm sm:[&_li]:text-[calc(var(--text-sm)_+_2px)] text-heading'>
            <li>&copy; 2025</li>
            {socialLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.name === 'Email' ? `mailto:${item.link}` : item.link} target='_blank'>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer