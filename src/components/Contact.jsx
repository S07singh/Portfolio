import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaArrowRight, FaCopy, FaCheck } from 'react-icons/fa'
import Magnetic from './Magnetic'
import { site, socialLinks } from '../data/site'

const fields = [
  { name: 'name', label: "What's your name?", type: 'text', placeholder: 'Jane Doe' },
  { name: 'email', label: 'Your email', type: 'email', placeholder: 'jane@company.com' },
  { name: 'subject', label: 'What is it about?', type: 'text', placeholder: 'AI engineer role, collaboration…' },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = 'service_uih0v08'
      const templateId = 'template_2g21sv7'
      const publicKey = 'oqKuycwjh0AeWj2QI'

      // Variables must match the EmailJS template
      const params = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      }

      await emailjs.send(serviceId, templateId, params, publicKey)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full border-0 border-b border-cream/20 bg-transparent px-0 py-3 text-lg text-cream placeholder-cream/30 transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-0'

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-cream md:py-36">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-x relative">
        <div className="mb-6 flex items-center gap-4">
          <span className="eyebrow !text-accent">(06)</span>
          <span className="eyebrow !text-cream/60">Contact</span>
          <span className="h-px flex-1 bg-cream/15" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="display text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Let&apos;s build something <span className="italic text-accent">intelligent</span>.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <p className="max-w-md text-lg text-cream/70">
              I&apos;m looking for AI / ML engineering roles and interesting problems. My inbox is open, and I usually
              reply within a day.
            </p>

            <div>
              <p className="eyebrow mb-3 !text-cream/50">Email</p>
              <button
                onClick={copyEmail}
                data-cursor={copied ? 'Copied' : 'Copy'}
                className="group flex items-center gap-3 text-left font-serif text-2xl sm:text-3xl"
              >
                <span className="link-underline break-all">{site.email}</span>
                {copied ? <FaCheck className="shrink-0 text-sm text-accent" /> : <FaCopy className="shrink-0 text-sm text-cream/40 group-hover:text-accent" />}
              </button>
            </div>

            <div>
              <p className="eyebrow mb-3 !text-cream/50">Socials</p>
              <ul className="border-t border-cream/15">
                {socialLinks.slice(0, 2).map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-cream/15 py-4"
                    >
                      <span className="flex items-center gap-3">
                        <s.icon className="text-cream/50 transition-colors group-hover:text-accent" />
                        {s.label}
                      </span>
                      <span className="font-mono text-xs text-cream/50 transition-transform duration-300 group-hover:-translate-x-2">
                        {s.handle} ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="eyebrow !text-cream/50">Based in {site.location} · Open to remote</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-7">
            {fields.map((f, i) => (
              <div key={f.name} className="flex gap-5">
                <span className="pt-4 font-mono text-xs text-accent">0{i + 1}</span>
                <label className="flex-1">
                  <span className="block font-serif text-2xl">{f.label}</span>
                  <input
                    type={f.type}
                    name={f.name}
                    value={formData[f.name]}
                    onChange={handleChange}
                    required
                    placeholder={f.placeholder}
                    className={inputClass}
                  />
                </label>
              </div>
            ))}
            <div className="flex gap-5">
              <span className="pt-4 font-mono text-xs text-accent">04</span>
              <label className="flex-1">
                <span className="block font-serif text-2xl">Your message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Hi Sudhir, I'd like to talk about…"
                  className={`${inputClass} resize-none`}
                />
              </label>
            </div>

            {submitStatus && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl border px-5 py-4 text-sm ${
                  submitStatus === 'success' ? 'border-sage/50 bg-sage/20 text-cream' : 'border-accent/50 bg-accent/15 text-cream'
                }`}
              >
                {submitStatus === 'success'
                  ? "Message sent. Thanks! I'll get back to you soon."
                  : `Couldn't send that. Please try again or email ${site.email} directly.`}
              </motion.p>
            )}

            <div className="pl-9">
              <Magnetic>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-36 w-36 flex-col items-center justify-center gap-2 rounded-full bg-accent text-cream transition-colors duration-300 hover:bg-cream hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="text-sm font-medium">{isSubmitting ? 'Sending…' : 'Send it'}</span>
                  <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
