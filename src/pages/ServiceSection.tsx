import { FlaskConical, Handshake, Newspaper, ExternalLink, Globe } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import data from '../data.json'

const typeColors: Record<string, string> = {
  'Research Project':            'bg-blue-50 text-blue-700 border-blue-200',
  'Research Grant':              'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Workshop Grant':              'bg-purple-50 text-purple-700 border-purple-200',
  'Seminar/Symposia Grant':      'bg-violet-50 text-violet-700 border-violet-200',
  'Course Material Development': 'bg-teal-50 text-teal-700 border-teal-200',
  'Industry Sponsored Research': 'bg-amber-50 text-amber-700 border-amber-200',
  'Seed Grant':                  'bg-green-50 text-green-700 border-green-200',
}

export function ServiceSection() {
  const { researchGrants, mouCollaborations, editorialBoards } = data

  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">

      {/* ── Research Grants ───────────────────────────────────────────── */}
      <SectionHeader
        title="Research Grants & Projects"
        subtitle="Externally funded research projects, grants, workshops, and industry-sponsored initiatives."
      />

      <div className="flex flex-col gap-4 mb-16">
        {researchGrants.map((grant) => {
          const chipClass = typeColors[grant.type] ?? 'bg-gray-50 text-gray-600 border-gray-200'
          return (
            <div
              key={grant.serial}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow flex gap-5"
            >
              {/* Serial number badge */}
              <div className="shrink-0 w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">{grant.serial}</span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-semibold text-gray-900 leading-snug flex-1">
                    {grant.title}
                  </p>
                  <span className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${chipClass}`}>
                    {grant.type}
                  </span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-600">Funding Agency: </span>
                  {grant.fundingAgency}
                </p>

                {'investigators' in grant && grant.investigators && (
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    <span className="font-medium text-gray-600">Investigators: </span>
                    {grant.investigators}
                  </p>
                )}

                {'grantCode' in grant && grant.grantCode && (
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="font-medium text-gray-600">Grant Code: </span>
                    {grant.grantCode}
                  </p>
                )}

                {grant.year && (
                  <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    {grant.year}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── MoU / Collaborations ───────────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-1">
        <Handshake className="w-6 h-6 text-indigo-500 shrink-0" />
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          MoU &amp; International Collaborations
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-8 ml-9">
        Memoranda of Understanding coordinated for academic and research partnerships.
      </p>

      <div className="flex flex-col gap-4 mb-16">
        {mouCollaborations.map((mou) => (
          <div
            key={mou.serial}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow flex gap-5"
          >
            <div className="shrink-0 w-9 h-9 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center">
              <Globe className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <p className="text-sm font-semibold text-gray-900 leading-snug flex-1">
                  {mou.description}
                </p>
                {mou.date && (
                  <span className="shrink-0 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                    {mou.date}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="text-xs font-medium text-gray-500">
                  <span className="font-semibold text-gray-700">Partner: </span>
                  {mou.partnerInstitution}
                </span>
                <span className="text-xs font-medium text-gray-500">·</span>
                <span className="text-xs font-medium text-gray-500">{mou.partnerCountry}</span>
                <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                  Role: {mou.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Editorial Boards ─────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-1">
        <Newspaper className="w-6 h-6 text-blue-500 shrink-0" />
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Editorial Board Memberships
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-8 ml-9">
        Roles in editorial boards of international peer-reviewed journals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {editorialBoards.map((entry, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow flex gap-4"
          >
            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-blue-500" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-snug">{entry.journal}</p>
              {entry.publisher && (
                <p className="text-xs text-gray-500 mt-0.5">{entry.publisher}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                  {entry.role}
                </span>
                {'eissn' in entry && entry.eissn && (
                  <span className="text-xs text-gray-400 font-medium">EISSN: {entry.eissn}</span>
                )}
                {'issn' in entry && entry.issn && (
                  <span className="text-xs text-gray-400 font-medium">ISSN: {entry.issn}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
