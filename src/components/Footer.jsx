import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
import { socialLinks, site } from '../data/site'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line bg-cream">
      <div className="container-x pt-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <p className="eyebrow mb-4">Currently</p>
            <p className="max-w-sm font-serif text-2xl leading-snug">
              AI Engineer Intern at Acuron AI, building voice &amp; chat agents. Open to AI / ML engineering roles.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Pages</p>
            <ul className="space-y-2 text-sm">
              {[['Home', '/'], ['Work', '/projects'], ['Journey', '/journey'], ['Certificates', '/certificates'], ['Resume', '/resume']].map(([name, href]) => (
                <li key={name}>
                  <Link to={href} className="link-underline text-ink-soft hover:text-ink">{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline text-ink-soft hover:text-ink">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {year} {site.name}. Designed &amp; built in {site.location}.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="eyebrow inline-flex items-center gap-2 hover:text-ink"
          >
            Back to top <FaArrowUp />
          </button>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none px-4 pb-2 text-center">
        <span className="display block whitespace-nowrap text-[22vw] leading-[0.8] text-ink/[0.06]">
          Sudhir<span className="italic">.</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
