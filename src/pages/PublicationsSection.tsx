import { ExternalLink, BookOpen, Edit3, Pencil, FileText } from 'lucide-react'
import publicationsData from '../data/publications.json'

export function PublicationsSection() {
  const { conferencePapers, books } = publicationsData
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50 min-h-full">

      {/* ── Books / Edited Volumes ─────────────────────────────────────── */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-1">
          <BookOpen className="w-6 h-6 text-blue-500 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Books</h2>
        </div>
        <p className="text-sm text-gray-500 mb-8 ml-9">Edited volumes and special journal issues</p>

        {/* Guest Editor */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Edit3 className="w-4 h-4 text-indigo-500" />
            <h3 className="text-base font-semibold text-gray-800">Guest Editor</h3>
          </div>
          <div className="flex flex-col gap-4">
            {books.guestEditor.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600">{i + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{item.title}</p>
                  <p className="mt-1.5 text-xs text-gray-500">
                    <span className="font-medium text-gray-600">Publisher: </span>{item.publisher}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Pencil className="w-4 h-4 text-blue-500" />
            <h3 className="text-base font-semibold text-gray-800">Editor</h3>
          </div>
          <div className="flex flex-col gap-4">
            {books.editor.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">{i + 1}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <p className="text-sm font-semibold text-gray-900 leading-snug">{item.title}</p>
                    {item.status && (
                      <span className="shrink-0 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs text-gray-500">
                    <span className="font-medium text-gray-600">Publisher: </span>{item.publisher}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    <span className="font-medium text-gray-600">Editors: </span>{item.editors}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Conference / Symposium Papers ──────────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <FileText className="w-6 h-6 text-blue-500 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Conference / Symposium Papers
          </h2>
        </div>
        <p className="mt-1 text-gray-500 text-sm leading-relaxed mb-8">
          Special, International, and National Conference and Symposium contributions.
        </p>
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
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {paper.year}
                  </span>
                  {'doi' in paper && paper.doi && (
                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline"
                    >
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
