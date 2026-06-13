import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

export function ResearchSection() {
  const { focusAreas } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <SectionHeader
        title="Research Areas"
        subtitle="My research spans geotechnical and geoenvironmental engineering, with a focus on ground improvement, soil stabilization, and sustainable infrastructure."
      />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <ul className="space-y-4">
          {focusAreas.map((area) => (
            <li key={area.title} className="flex items-start gap-3 group">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:bg-blue-700 transition-colors" />
              <span className="text-gray-700 text-sm leading-relaxed">{area.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
