import { Trophy, GraduationCap, Users } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  GraduationCap,
}

export function AchievementSection() {
  const { awards, societyMemberships } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader
        title="Awards & Honours"
        subtitle="Recognition from the geotechnical and academic community for contributions to research."
      />

      {/* Awards */}
      <div className="space-y-4 mb-14">
        {awards.map((award, i) => {
          const Icon = iconMap[award.icon] ?? Trophy
          return (
            <div
              key={i}
              className="flex items-start gap-5 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center">
                <Icon className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-800 leading-relaxed font-medium">{award.title}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full self-start">
                {award.year}
              </span>
            </div>
          )
        })}
      </div>

      {/* Professional Memberships */}
      <div className="flex items-center gap-3 mb-5">
        <Users className="w-5 h-5 text-blue-500 shrink-0" />
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Member of Professional Bodies</h2>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <ul className="space-y-3">
          {societyMemberships.map((membership, i) => (
            <li key={i} className="flex items-start gap-3 group">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:bg-blue-700 transition-colors" />
              <span className="text-sm text-gray-700 leading-relaxed">{membership}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
