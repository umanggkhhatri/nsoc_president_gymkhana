import React, { useState } from 'react'
import {
  Menu, X, Dna, Brain, FlaskConical, Users, Star, BarChart2,
  Mail, MapPin, Phone, Download,
  CheckCircle2, Award, BookOpen, Microscope, Globe, Mountain, Music,
  Camera, ChevronRight, Send, ExternalLink, GraduationCap,
  HeartHandshake, Pen, BookMarked, ArrowRight,
} from 'lucide-react'
import data from './data.json'

// ── Icon map ───────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Dna, Brain, FlaskConical, BookOpen, Globe, HeartHandshake, Pen,
  Award, Star, GraduationCap, BookMarked, Mountain, Music, Camera,
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  LinkedIn: LinkedInIcon,
}

// ── Nav items ──────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  'Home',
  'Research',
  'Teaching',
  'Publications',
  'Education',
  'Activities',
  'Achievement',
  'Miscellaneous',
  'Contact',
]

// ── Shared Components ──────────────────────────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider border border-blue-100">
      {children}
    </span>
  )
}

function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <Badge>{badge}</Badge>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-500 max-w-2xl text-base leading-relaxed">{subtitle}</p>}
    </div>
  )
}

// ── Home ───────────────────────────────────────────────────────────────────────
function HomeSection() {
  const { profile } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <Badge>About Me</Badge>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            {profile.name}
          </h1>
          <p className="mt-2 text-base font-medium text-blue-600">{profile.title} · {profile.institution}</p>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">{profile.bio}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={profile.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              Google Scholar
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 bg-blue-100 rounded-3xl opacity-60 blur-xl" />
            <img
              src={profile.portrait}
              alt={`${profile.name} portrait`}
              className="relative w-72 h-80 sm:w-80 sm:h-96 object-cover object-top rounded-2xl shadow-2xl border-4 border-white"
            />

          </div>
        </div>
      </div>
    </section>
  )
}

// ── Research ───────────────────────────────────────────────────────────────────
function ResearchSection() {
  const { focusAreas, labBanner } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <SectionHeader
        badge="Focus"
        title="Areas of Focus"
        subtitle="My research sits at the intersection of engineering and environmental science — three disciplines that together unlock the complexity of real-world systems."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focusAreas.map((area) => {
          const Icon = ICON_MAP[area.icon]
          return (
            <div
              key={area.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                {Icon && <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom Banner */}
      <div className="mt-10 relative rounded-2xl overflow-hidden h-52 shadow-lg">
        <img src={labBanner.image} alt={labBanner.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 flex items-center px-10">
          <div>
            <p className="text-white/70 text-sm font-medium mb-1 uppercase tracking-wider">{labBanner.label}</p>
            <h3 className="text-white text-2xl font-bold">{labBanner.heading}</h3>
            <a href={labBanner.ctaHref} className="mt-3 inline-flex items-center gap-2 text-blue-300 text-sm font-semibold hover:text-white transition-colors">
              {labBanner.ctaLabel} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Teaching ───────────────────────────────────────────────────────────────────
function TeachingSection() {
  const { courses } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader
        badge="Teaching"
        title="Courses I Teach"
        subtitle="Bridging theory and practice — my courses equip students with computational skills grounded in real-world questions."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {courses.map((course) => (
          <div key={course.code} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900 pr-4 leading-snug">{course.title}</h3>
              <span className="shrink-0 px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg">{course.code}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Users className="w-4 h-4 text-blue-400" />
                <span>{course.students} Students</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{course.rating} Rating</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <BarChart2 className="w-4 h-4 text-blue-400" />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Publications ───────────────────────────────────────────────────────────────
function PublicationsSection() {
  const { publications, profile } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <SectionHeader
        badge="Publications"
        title="Selected Publications"
        subtitle="A sample of recent peer-reviewed work — full list available on Google Scholar."
      />
      <div className="flex flex-col gap-4">
        {publications.map((pub) => (
          <div key={pub.doi} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4 group">
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors">{pub.title}</h3>
              <p className="mt-1.5 text-sm text-gray-500">{pub.authors}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium text-gray-400">{pub.journal} · {pub.year}</span>
                <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline">
                  DOI <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <a href="#"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
              <Download className="w-4 h-4" />
              PDF
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href={profile.googleScholarUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
          View all on Google Scholar <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

// ── Education ──────────────────────────────────────────────────────────────────
function EducationSection() {
  const { education, educationImage, profile } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader badge="Education" title="Academic Background" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Timeline */}
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border-2 border-blue-200 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                {i < education.length - 1 && <div className="w-0.5 h-full bg-blue-100 mt-2" />}
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 text-base">{edu.degree}</h3>
                <p className="text-gray-600 text-sm mt-0.5">{edu.uni}</p>
                <span className="mt-1.5 inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{edu.years}</span>
              </div>
            </div>
          ))}
        </div>

        {/* University Image */}
        <div className="relative">
          <img src={educationImage.src} alt={educationImage.alt}
            className="rounded-2xl w-full h-72 object-cover shadow-xl border-4 border-white" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200" />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-gray-100 shadow">
            <p className="text-xs text-gray-500 font-medium">Current Affiliation</p>
            <p className="text-sm font-bold text-gray-900">{profile.affiliation}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Activities ─────────────────────────────────────────────────────────────────
function ActivitiesSection() {
  const { professionalActivities } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <SectionHeader
        badge="Service"
        title="Professional Activities"
        subtitle="Contributing to the broader scientific community through editorial, advisory, and outreach roles."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {professionalActivities.map((act) => {
          const Icon = ICON_MAP[act.icon]
          return (
            <div key={act.title} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-4 items-start hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                {Icon && <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{act.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{act.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ── Achievement ────────────────────────────────────────────────────────────────
function AchievementSection() {
  const { awards } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader
        badge="Awards"
        title="Awards & Honors"
        subtitle="Recognition from the global scientific community for contributions to research and education."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {awards.map((award) => {
          const Icon = ICON_MAP[award.icon]
          return (
            <div key={award.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="mx-auto w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                {Icon && <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />}
              </div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug">{award.title}</h3>
              <span className="mt-2 inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">{award.year}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ── Miscellaneous ──────────────────────────────────────────────────────────────
function MiscellaneousSection() {
  const { personal } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <SectionHeader
        badge="Personal"
        title="Beyond Academia"
        subtitle="Science is my calling — but life outside the lab keeps me curious, grounded, and human."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {personal.map((item) => {
          const Icon = ICON_MAP[item.icon]
          return (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                {Icon && <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ── Contact ────────────────────────────────────────────────────────────────────
function ContactSection() {
  const { profile } = data
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader badge="Contact" title="Let's Collaborate" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-gray-500 leading-relaxed mb-8">
            Whether you're a student, fellow researcher, industry partner, or simply curious — I'd love to hear from you. Reach out via email or fill in the form.
          </p>
          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium">{profile.email}</span>
            </a>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">{profile.address}</span>
            </div>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium">{profile.phone}</span>
            </a>
          </div>
          {/* Social */}
          <div className="mt-8 flex gap-3">
            {profile.social.map((s) => {
              const Icon = SOCIAL_ICON_MAP[s.platform]
              return (
                <a key={s.platform} href={s.href} aria-label={s.platform}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              )
            })}
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Message Sent!</h3>
              <p className="text-gray-500 text-sm mt-1">I'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-gray-700 mb-1.5">Name</label>
                  <input id="form-name" type="text" required placeholder="Jane Smith"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white" />
                </div>
                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
                  <input id="form-email" type="email" required placeholder="jane@university.edu"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white" />
                </div>
              </div>
              <div>
                <label htmlFor="form-subject" className="block text-xs font-semibold text-gray-700 mb-1.5">Subject</label>
                <input id="form-subject" type="text" required placeholder="Research collaboration inquiry"
                  value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white" />
              </div>
              <div>
                <label htmlFor="form-message" className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea id="form-message" required rows={5} placeholder="Tell me about your research interests or questions..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none bg-white" />
              </div>
              <button id="send-message-btn" type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md shadow-blue-200 transition-all duration-200 text-sm hover:-translate-y-0.5">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Section renderer ───────────────────────────────────────────────────────────
function renderSection(section: string) {
  switch (section) {
    case 'Home':          return <HomeSection />
    case 'Research':      return <ResearchSection />
    case 'Teaching':      return <TeachingSection />
    case 'Publications':  return <PublicationsSection />
    case 'Education':     return <EducationSection />
    case 'Activities':    return <ActivitiesSection />
    case 'Achievement':   return <AchievementSection />
    case 'Miscellaneous': return <MiscellaneousSection />
    case 'Contact':       return <ContactSection />
    default:              return <HomeSection />
  }
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { profile } = data

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">

      {/* ── Left Sidebar ─────────────────────────────────────────────────── */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 flex flex-col w-52 bg-white border-r border-gray-100 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:flex lg:shrink-0
      `}>
        {/* Profile block */}
        <div className="flex flex-col items-center px-4 pt-8 pb-6 border-b border-gray-100">
          {/* Logo icon */}
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md mb-4">
            <Microscope className="w-5 h-5 text-white" />
          </div>
          {/* Portrait */}
          <div className="relative mb-3">
            <div className="absolute -inset-1 bg-blue-100 rounded-2xl opacity-70 blur-sm" />
            <img
              src={profile.portrait}
              alt={profile.name}
              className="relative w-24 h-24 rounded-2xl object-cover object-top border-2 border-white shadow-md"
            />
          </div>
          <p className="text-xs font-bold text-gray-900 text-center leading-tight">{profile.name}</p>
          <p className="text-xs text-blue-600 font-medium text-center mt-0.5">{profile.title}</p>
          <p className="text-xs text-gray-400 text-center mt-0.5">{profile.institution}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item
            return (
              <button
                key={item}
                id={`nav-${item.toLowerCase()}`}
                onClick={() => { setActiveSection(item); setMobileOpen(false) }}
                className={`w-full text-left px-5 py-2.5 text-sm font-medium transition-all duration-150 flex items-center gap-2 rounded-none cursor-pointer
                  ${isActive
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                {item}
              </button>
            )
          })}
        </nav>


      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Right Panel ──────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm px-6 py-3 flex items-center justify-between">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Breadcrumb / active section */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-medium hidden sm:block">{profile.name}</span>
            <span className="text-gray-300 hidden sm:block">/</span>
            <span className="text-sm font-semibold text-gray-900">{activeSection}</span>
          </div>


        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div key={activeSection} className="animate-fadeIn">
            {renderSection(activeSection)}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2024 {profile.name}. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}
