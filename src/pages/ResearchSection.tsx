import { GraduationCap, CheckCircle2, Clock, Award } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import researchData from '../data/research.json'

// Reusable student pill for compact grid cards
function StudentCard({ serial, name, joiningYear, awards, note, badgeColor }: {
  serial: number
  name: string
  joiningYear: string
  awards?: string
  note?: string
  badgeColor: 'blue' | 'green' | 'amber'
}) {
  const badge = {
    blue:  'bg-blue-50 border-blue-200 text-blue-600',
    green: 'bg-green-50 border-green-200 text-green-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
  }[badgeColor]

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex gap-3 hover:shadow-md transition-shadow">
      <div className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold ${badge}`}>
        {serial}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900 leading-snug">{name}</p>
        <p className="text-xs text-gray-400 mt-0.5">Joining: {joiningYear}</p>
        {note && <p className="text-xs text-indigo-600 mt-1 font-medium">{note}</p>}
        {awards && (
          <span className="inline-flex items-center gap-1 mt-1.5 text-xs bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full px-2 py-0.5 font-medium">
            <Award className="w-3 h-3 shrink-0" />
            {awards}
          </span>
        )}
      </div>
    </div>
  )
}

// Subsection block with header + status badge
function StudentSubsection({ icon: Icon, label, count, colorClass, children }: {
  icon: React.ElementType
  label: string
  count: number
  colorClass: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${colorClass}`} />
        <h4 className="text-base font-semibold text-gray-800">{label}</h4>
        <span className={`ml-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${
          colorClass.includes('green') ? 'bg-green-50 text-green-700 border-green-200' :
          colorClass.includes('blue')  ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                          'bg-amber-50 text-amber-700 border-amber-200'
        }`}>
          {count} Student{count !== 1 ? 's' : ''}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {children}
      </div>
    </div>
  )
}

export function ResearchSection() {
  const { focusAreas, phdStudents, mtechStudents, btechStudents } = researchData

  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">

      {/* ── Research Areas ─────────────────────────────────────────────── */}
      <SectionHeader
        title="Research Areas"
        subtitle="My research spans geotechnical and geoenvironmental engineering, with a focus on ground improvement, soil stabilization, and sustainable infrastructure."
      />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-14">
        <ul className="space-y-4">
          {focusAreas.map((area) => (
            <li key={area.title} className="flex items-start gap-3 group">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:bg-blue-700 transition-colors" />
              <span className="text-gray-700 text-sm leading-relaxed">{area.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Students Guided / Supervised ───────────────────────────────── */}
      <div className="flex items-center gap-3 mb-1">
        <GraduationCap className="w-6 h-6 text-blue-500 shrink-0" />
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Students Guided / Supervised</h2>
      </div>
      <p className="text-sm text-gray-500 mb-10 ml-9">PhD, M.Tech &amp; B.Tech students supervised at IIT Patna</p>

      {/* ── PhD ──────────────────────────────────────────────────────────── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1 h-6 rounded-full bg-blue-500 shrink-0" />
          <h3 className="text-xl font-bold text-gray-900">PhD Students</h3>
        </div>

        {/* Awarded */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <h4 className="text-base font-semibold text-gray-800">Awarded</h4>
            <span className="ml-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
              {phdStudents.awarded.length} Students
            </span>
          </div>
          <div className="space-y-4">
            {phdStudents.awarded.map((s) => (
              <div key={s.serial} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-5 hover:shadow-md transition-shadow">
                <div className="shrink-0 w-9 h-9 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-700">{s.serial}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 mb-2">{s.period}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-700">Thesis: </span>{s.thesis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing PhD */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-blue-500" />
            <h4 className="text-base font-semibold text-gray-800">Ongoing</h4>
            <span className="ml-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {phdStudents.ongoing.length} Students
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phdStudents.ongoing.map((s) => (
              <div key={s.serial} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex gap-4 hover:shadow-md transition-shadow">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">{s.serial}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 mb-1.5">Joining: {s.joiningYear}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-700">Area: </span>{s.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── M.Tech ───────────────────────────────────────────────────────── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1 h-6 rounded-full bg-indigo-500 shrink-0" />
          <h3 className="text-xl font-bold text-gray-900">M.Tech Students</h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">At IIT Patna</span>
        </div>

        <StudentSubsection icon={Clock} label="Ongoing" count={mtechStudents.ongoing.length} colorClass="text-blue-500">
          {mtechStudents.ongoing.map((s) => (
            <StudentCard key={s.serial} {...s} badgeColor="blue" />
          ))}
        </StudentSubsection>

        <StudentSubsection icon={CheckCircle2} label="Completed" count={mtechStudents.completed.length} colorClass="text-green-500">
          {mtechStudents.completed.map((s) => (
            <StudentCard key={s.serial} {...s} badgeColor="green" />
          ))}
        </StudentSubsection>
      </div>

      {/* ── B.Tech ───────────────────────────────────────────────────────── */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1 h-6 rounded-full bg-amber-500 shrink-0" />
          <h3 className="text-xl font-bold text-gray-900">B.Tech Students</h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">At IIT Patna</span>
        </div>

        <StudentSubsection icon={Clock} label="Ongoing" count={btechStudents.ongoing.length} colorClass="text-blue-500">
          {btechStudents.ongoing.map((s) => (
            <StudentCard key={s.serial} {...s} badgeColor="blue" />
          ))}
        </StudentSubsection>

        <StudentSubsection icon={CheckCircle2} label="Completed" count={btechStudents.completed.length} colorClass="text-green-500">
          {btechStudents.completed.map((s) => (
            <StudentCard key={s.serial} {...s} badgeColor="amber" />
          ))}
        </StudentSubsection>
      </div>

    </section>
  )
}
