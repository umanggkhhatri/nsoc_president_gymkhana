import type React from 'react'
import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

export function AchievementSection() {
  const { awards } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader
        title="Awards & Honors"
        subtitle="Recognition from the global scientific community for contributions to research and education."
      />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <ul className="space-y-4">
          {awards.map((award) => (
            <li key={award.title} className="flex items-start gap-3 group">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:bg-blue-700 transition-colors" />
              <span className="text-gray-700 text-sm leading-relaxed">
                {award.title}
                <span className="ml-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{award.year}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
