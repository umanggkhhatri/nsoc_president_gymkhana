
import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

export function TeachingSection() {
  const { courseGroups } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <SectionHeader
        title="Courses / Teaching"
        subtitle="Courses taught across institutions, spanning geotechnical engineering, rock mechanics, and engineering fundamentals."
      />
      <div className="space-y-10 max-w-4xl">
        {courseGroups.map((group) => (
          <div key={group.institution}>
            {/* Institution heading */}
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-base font-bold text-gray-900 tracking-wide uppercase">
                {group.institution}
              </h2>
            </div>

            {/* Bullet list */}
            <ul className="space-y-2.5 pl-11">
              {group.courses.map((course, i) => (
                <li key={i} className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                  {/* Bullet dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />

                  {/* Course title */}
                  <span className="text-gray-800 font-medium">{course.title}</span>

                  {/* Course code badge */}
                  <span className="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 rounded-md">
                    {course.code}
                  </span>

                  {/* Sessions */}
                  {course.sessions && (
                    <span className="text-gray-400 text-xs">({course.sessions})</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Divider (except after last group) */}
            <div className="mt-8 border-t border-gray-100" />
          </div>
        ))}
      </div>
    </section>
  )
}
