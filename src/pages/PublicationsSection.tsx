import { ExternalLink } from 'lucide-react'
import data from '../data.json'

export function PublicationsSection() {
  const { publications, profile } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">
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
      <div className="flex flex-col gap-4">
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
    </section>
  )
}
