import { Users, BarChart2 } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

export function TeachingSection() {
  const { courses } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader
        title="Courses / Teachings"
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
