import { useState, useEffect, useRef } from 'react'
import { Home, FlaskConical, BookOpen, FileText, GraduationCap, Activity, Trophy, LayoutGrid, Mail, Menu, X, Handshake } from 'lucide-react'
import data from './data.json'
import iitpLogo from './assets/iitp-logo.png'

import { HomeSection } from './pages/HomeSection'
import { ResearchSection } from './pages/ResearchSection'
import { TeachingSection } from './pages/TeachingSection'
import { PublicationsSection } from './pages/PublicationsSection'
import { JournalSection } from './pages/JournalSection'
import { EducationSection } from './pages/EducationSection'
import { ActivitiesSection } from './pages/ActivitiesSection'
import { AchievementSection } from './pages/AchievementSection'
import { MiscellaneousSection } from './pages/MiscellaneousSection'
import { ServiceSection } from './pages/ServiceSection'
import { ContactSection } from './pages/ContactSection'

// ── Nav items ──────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home',                icon: Home },
  { label: 'Research',            icon: FlaskConical },
  { label: 'Teaching',            icon: BookOpen },
  { label: 'Publications',        icon: FileText },
  { label: 'Books & Papers',      icon: FileText },
  { label: 'Academic Background', icon: GraduationCap },
  { label: 'Activities',          icon: Activity },
  { label: 'Achievement',         icon: Trophy },
  { label: 'Service & Grants',    icon: Handshake },
  { label: 'Miscellaneous',       icon: LayoutGrid },
  { label: 'Contact',             icon: Mail },
]

// ── Section renderer ───────────────────────────────────────────────────────────
function renderSection(section: string) {
  switch (section) {
    case 'Home':                return <HomeSection />
    case 'Research':            return <ResearchSection />
    case 'Teaching':            return <TeachingSection />
    case 'Publications':        return <JournalSection />
    case 'Books & Papers':      return <PublicationsSection />
    case 'Academic Background': return <EducationSection />
    case 'Activities':          return <ActivitiesSection />
    case 'Achievement':         return <AchievementSection />
    case 'Service & Grants':    return <ServiceSection />
    case 'Miscellaneous':       return <MiscellaneousSection />
    case 'Contact':             return <ContactSection />
    default:                    return <HomeSection />
  }
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [activeSection])

  const { profile } = data

  const navigate = (label: string) => {
    setActiveSection(label)
    setDrawerOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">

      {/* ── Left Sidebar (desktop only) ───────────────────────────────────── */}
      <aside className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:shrink-0 flex-col w-52 bg-white border-r border-gray-100 shadow-lg">
        {/* Profile block */}
        <div className="flex flex-col items-center px-4 pt-8 pb-6 border-b border-gray-100">
          <img src={iitpLogo} alt="IIT Patna" className="w-24 h-auto mb-5 object-contain" />
          <p className="text-sm font-extrabold text-gray-900 text-center leading-snug">{profile.name}</p>
          <p className="text-sm text-blue-600 font-semibold text-center mt-1">{profile.title}</p>
          <p className="text-sm text-gray-500 font-medium text-center mt-0.5">{profile.institution}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV_ITEMS.map(({ label, icon: Icon }) => {
            const isActive = activeSection === label
            return (
              <button
                key={label}
                id={`nav-${label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => navigate(label)}
                className={`w-full text-left px-5 py-2.5 text-sm font-medium transition-all duration-150 flex items-center gap-2.5 cursor-pointer
                  ${isActive
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* ── Right Panel ───────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        <header className="lg:hidden sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          {/* Mobile: hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors shrink-0"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Profile info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-extrabold text-gray-900 leading-tight truncate">{profile.name}</p>
            <p className="text-xs text-gray-500 leading-tight truncate">
              <span className="text-blue-600 font-semibold">{profile.title}</span>
              <span className="mx-1 text-gray-300">·</span>
              {profile.institution}
            </p>
          </div>


        </header>


        {/* Content — padded at bottom on mobile so bottom-nav doesn't cover it */}
        <main ref={mainRef} className="flex-1 overflow-y-auto pb-20 lg:pb-0">
          <div key={activeSection} className="animate-fadeIn">
            {renderSection(activeSection)}
          </div>
        </main>

        {/* Footer (desktop) */}
        <footer className="hidden lg:flex bg-white border-t border-gray-100 px-6 py-4 items-center justify-between text-xs text-gray-400">
          <p>© 2024 {profile.name}. All rights reserved.</p>
        </footer>
      </div>

      {/* ── Mobile full-screen drawer ──────────────────────────────────────── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src={iitpLogo} alt="IIT Patna" className="w-10 h-auto object-contain" />
              <div>
                <p className="text-sm font-extrabold text-gray-900 leading-snug">{profile.name}</p>
                <p className="text-xs text-blue-600 font-semibold">{profile.title}</p>
              </div>
            </div>
            <button
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer nav items */}
          <nav className="flex-1 overflow-y-auto py-4">
            {NAV_ITEMS.map(({ label, icon: Icon }) => {
              const isActive = activeSection === label
              return (
                <button
                  key={label}
                  onClick={() => navigate(label)}
                  className={`w-full text-left px-6 py-3.5 text-base font-medium transition-all duration-150 flex items-center gap-4 cursor-pointer
                    ${isActive
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
                    }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {label}
                </button>
              )
            })}
          </nav>

          {/* Drawer footer */}
          <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
            © 2024 {profile.name}. All rights reserved.
          </div>
        </div>
      )}

      {/* ── Mobile bottom navigation bar ──────────────────────────────────── */}
      <nav className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
        <div className="flex justify-around items-center h-16 px-1">
          {NAV_ITEMS.slice(0, 5).map(({ label, icon: Icon }) => {
            const isActive = activeSection === label
            // Shorten long labels for the bottom bar
            const shortLabel = label === 'Academic Background' ? 'Background'
                             : label === 'Publications' ? 'Papers'
                             : label
            return (
              <button
                key={label}
                onClick={() => navigate(label)}
                className={`flex flex-col items-center justify-center gap-0.5 px-1 py-1 min-w-0 flex-1 transition-colors duration-150 cursor-pointer
                  ${isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform duration-150 ${isActive ? 'scale-110' : ''}`} />
                <span className="text-[10px] font-semibold truncate w-full text-center leading-tight">
                  {shortLabel}
                </span>
                {isActive && <span className="absolute top-0 w-6 h-0.5 bg-blue-600 rounded-full" />}
              </button>
            )
          })}
          {/* "More" button opens the full drawer for remaining items */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`flex flex-col items-center justify-center gap-0.5 px-1 py-1 min-w-0 flex-1 transition-colors duration-150 cursor-pointer
              ${!NAV_ITEMS.slice(0, 5).find(n => n.label === activeSection) ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Menu className="w-5 h-5 shrink-0" />
            <span className="text-[10px] font-semibold">More</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
