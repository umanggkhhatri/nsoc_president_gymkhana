import data from '../data.json'

export function ActivitiesSection() {
  const { invitedLectures } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      {/* Institute/Departmental Activities */}
      <div className="mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">Institute / Departmental Activities</h3>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
            <p className="text-base font-semibold text-gray-800 leading-relaxed">President Gymkhana, IIT Patna</p>
          </div>
        </div>
      </div>

      {/* Invited Lectures / Talks */}
      <div className="mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">Invited Lectures / Talks</h3>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <ul className="space-y-4">
            {invitedLectures.map((lecture, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:bg-blue-700 transition-colors" />
                <p className="text-gray-700 text-sm leading-relaxed">{lecture}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
