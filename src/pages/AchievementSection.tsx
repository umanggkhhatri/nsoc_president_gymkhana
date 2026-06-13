import type React from 'react'
import {
  Dna, Brain, FlaskConical, BookOpen, Globe, HeartHandshake, Pen,
  Award, Star, GraduationCap, BookMarked, Mountain, Music, Camera,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

const ICON_MAP: Record<string, React.ElementType> = {
  Dna, Brain, FlaskConical, BookOpen, Globe, HeartHandshake, Pen,
  Award, Star, GraduationCap, BookMarked, Mountain, Music, Camera,
}

export function AchievementSection() {
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
