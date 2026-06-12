import React, { useState } from 'react'
import {
  Menu, X, Dna, Brain, FlaskConical, Users, Star, BarChart2,
  Mail, MapPin, Phone,
  CheckCircle2, Award, BookOpen, Globe, Mountain, Music,
  Camera, ExternalLink, GraduationCap,
  HeartHandshake, Pen, BookMarked
} from 'lucide-react'
import data from './data.json'
import iitpLogo from './assets/iitp-logo.png'

// ── Icon map ───────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Dna, Brain, FlaskConical, BookOpen, Globe, HeartHandshake, Pen,
  Award, Star, GraduationCap, BookMarked, Mountain, Music, Camera,
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

// ── Shared Components ─────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
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
  const { focusAreas } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <SectionHeader
        title="Research Areas"
        subtitle="My research spans geotechnical and geoenvironmental engineering, with a focus on ground improvement, soil stabilization, and sustainable infrastructure."
      />
      <ul className="space-y-2">
        {focusAreas.map((area) => (
          <li key={area.title} className="flex items-center gap-2 text-gray-700 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            {area.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

// ── Teaching ───────────────────────────────────────────────────────────────────
function TeachingSection() {
  const { courses } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader
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
      <SectionHeader title="Academic Background" />
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
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-12">Contact</h2>

      <div className="max-w-lg divide-y divide-gray-100">

        {/* Address */}
        <div className="flex items-start gap-5 py-7">
          <MapPin className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Address</p>
            <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">{profile.address}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-5 py-7">
          <Mail className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Email Id</p>
            <a href={`mailto:${profile.email}`} className="text-base font-medium text-blue-600 hover:underline underline-offset-2">
              {profile.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-5 py-7">
          <Phone className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Contact No.</p>
            <a href={`tel:${profile.phone}`} className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
              {profile.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

// ── Section renderer ───────────────────────────────────────────────────────────
function renderSection(section: string) {
  switch (section) {
    case 'Home': return <HomeSection />
    case 'Research': return <ResearchSection />
    case 'Teaching': return <TeachingSection />
    case 'Publications': return <PublicationsSection />
    case 'Education': return <EducationSection />
    case 'Activities': return <ActivitiesSection />
    case 'Achievement': return <AchievementSection />
    case 'Miscellaneous': return <MiscellaneousSection />
    case 'Contact': return <ContactSection />
    default: return <HomeSection />
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
          <img src={iitpLogo} alt="IIT Patna" className="w-24 h-auto mb-5 object-contain" />
          <p className="text-sm font-extrabold text-gray-900 text-center leading-snug">{profile.name}</p>
          <p className="text-sm text-blue-600 font-semibold text-center mt-1">{profile.title}</p>
          <p className="text-sm text-gray-500 font-medium text-center mt-0.5">{profile.institution}</p>
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
        </footer>
      </div>
    </div>
  )
}
