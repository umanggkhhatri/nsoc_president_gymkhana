import { Briefcase } from 'lucide-react'
import activitiesData from '../data/activities.json'

export function ActivitiesSection() {
  const { invitedLectures, instituteDeptResponsibilities } = activitiesData

  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">

      {/* ── Institute / Departmental Responsibilities ──────────────────── */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-1">
          <Briefcase className="w-6 h-6 text-blue-500 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Institute / Departmental Responsibilities
          </h2>
        </div>
        <p className="text-sm text-gray-500 mb-8 ml-9">
          Administrative, academic, and committee responsibilities held at IIT Patna.
        </p>

        <div className="flex flex-col gap-3">
          {instituteDeptResponsibilities.map((item) => (
            <div
              key={item.serial}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow flex gap-4"
            >
              {/* Serial badge */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">{item.serial}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-gray-900 leading-snug flex-1">
                    {item.title}
                  </p>
                  {item.period && (
                    <span className="shrink-0 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Invited Lectures / Talks ───────────────────────────────────── */}
      <div className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-1">
          Invited Lectures / Talks
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Keynote addresses, expert lectures, and invited talks at national and international forums.
        </p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <ul className="space-y-4">
            {invitedLectures.map((lecture, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <span className="shrink-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-600 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{lecture}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
