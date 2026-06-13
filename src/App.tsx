import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import data from './data.json'
import iitpLogo from './assets/iitp-logo.png'

import { HomeSection } from './pages/HomeSection'
import { ResearchSection } from './pages/ResearchSection'
import { TeachingSection } from './pages/TeachingSection'
import { PublicationsSection } from './pages/PublicationsSection'
import { EducationSection } from './pages/EducationSection'
import { ActivitiesSection } from './pages/ActivitiesSection'
import { AchievementSection } from './pages/AchievementSection'
import { MiscellaneousSection } from './pages/MiscellaneousSection'
import { ContactSection } from './pages/ContactSection'

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
        lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:flex lg:shrink-0
      `}>
        {/* Profile block */}
        <div className="flex flex-col items-center px-4 pt-8 pb-6 border-b border-gray-100">
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
