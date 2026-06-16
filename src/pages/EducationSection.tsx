import { CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

export function EducationSection() {
  const { education, educationImage, profile } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader title="Academic Background" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
