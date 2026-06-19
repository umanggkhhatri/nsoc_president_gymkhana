import { ExternalLink } from 'lucide-react'
import data from '../data.json'

export function PublicationsSection() {
  const { publications, profile, conferencePapers } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      {/* Journal Publications */}
      <div className="mb-12">
        <div className="flex items-end gap-3 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Selected Publications</h2>
          <a href={profile.googleScholarUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
            Google Scholar <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="mt-3 text-gray-500 max-w-2xl text-base leading-relaxed">A sample of recent peer-reviewed work — full list available on Google Scholar.</p>
      </div>
      <div className="flex flex-col gap-4 mb-16">
        {publications.map((pub) => (
          <div key={pub.doi} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4 group">
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors">{pub.title}</h3>
              <p className="mt-1.5 text-sm text-gray-500">{pub.authors}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium text-gray-400">{pub.journal} · {pub.year}</span>
                <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline">
                  Scholar Articles <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conference / Symposium Papers */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Conference / Symposium Papers</h2>
        <p className="mt-2 text-gray-500 text-base leading-relaxed">Special, International, and National Conference and Symposium contributions.</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <ol className="space-y-5 list-none">
          {conferencePapers.map((paper, i) => (
            <li key={i} className="flex items-start gap-4 group">
              <span className="shrink-0 w-7 h-7 rounded-full bg-blue-50 text-blue-600 text-xs font-bold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed">{paper.citation}</p>
                <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{paper.year}</span>
                  {'doi' in paper && paper.doi && (
                    <a href={paper.doi} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline">
                      DOI <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
