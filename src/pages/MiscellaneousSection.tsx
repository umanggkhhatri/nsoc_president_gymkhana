import { SectionHeader } from '../components/SectionHeader'
import activitiesData from '../data/activities.json'

export function MiscellaneousSection() {
  const { societyMemberships } = activitiesData
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <SectionHeader
        title="Society Memberships"
        subtitle="Professional affiliations and active memberships in national and international engineering societies."
      />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <ul className="space-y-4">
          {societyMemberships.map((membership, i) => (
            <li key={i} className="flex items-start gap-3 group">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:bg-blue-700 transition-colors" />
              <span className="text-gray-700 text-sm leading-relaxed">{membership}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
