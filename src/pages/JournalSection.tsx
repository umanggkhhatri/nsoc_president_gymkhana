import { ExternalLink, FileText, Star, Award } from 'lucide-react'
import data from '../data.json'

export function JournalSection() {
  const { publications, profile } = data

  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-2">
        <div className="flex items-center gap-3">
          <FileText className="w-7 h-7 text-blue-500 shrink-0" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Journal Publications
          </h1>
        </div>
        <a
          href={profile.googleScholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 self-start sm:self-auto"
        >
          Google Scholar <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-gray-500 mb-10">
        Refereed peer-reviewed journal articles — full list available on Google Scholar.
      </p>

      <div className="flex flex-col gap-4">
        {publications.map((pub, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-5 group"
          >
            {/* Index badge */}
            <div className="shrink-0 w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
              <span className="text-sm font-bold text-blue-600 group-hover:text-white transition-colors">
                {i + 1}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              {/* Title row with optional status badge */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors flex-1">
                  {pub.title}
                </h3>
                {'status' in pub && pub.status && (
                  <span className="shrink-0 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    {pub.status}
                  </span>
                )}
              </div>

              {/* Authors */}
              <p className="mt-1.5 text-sm text-gray-500">{pub.authors}</p>

              {/* Journal, year, DOI row */}
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium text-gray-400">
                  {pub.journal} · {pub.year}
                </span>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline"
                  >
                    DOI <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Optional impact factor */}
              {'impactFactor' in pub && pub.impactFactor && (
                <div className="mt-2 flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-yellow-500 shrink-0" />
                  <span className="text-xs text-gray-400 font-medium">{pub.impactFactor}</span>
                </div>
              )}

              {/* Optional note (e.g. Best Paper) */}
              {'note' in pub && pub.note && (
                <div className="mt-2 inline-flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 rounded-full px-2.5 py-0.5">
                  <Award className="w-3 h-3 text-yellow-500 shrink-0" />
                  <span className="text-xs font-semibold text-yellow-700">{pub.note}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* "And many more" footer */}
      <div className="mt-10 flex flex-col items-center gap-3 py-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm font-medium">…and many more publications</p>
        <a
          href={profile.googleScholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm"
        >
          View Full List on Google Scholar <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
