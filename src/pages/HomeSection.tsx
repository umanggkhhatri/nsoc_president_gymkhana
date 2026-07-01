import { ExternalLink } from 'lucide-react'
import profileData from '../data/profile.json'

export function HomeSection() {
  const { profile } = profileData
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            {profile.name}
          </h1>
          <p className="mt-2 text-base font-medium text-blue-600">{profile.title} · {profile.institution}</p>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">{profile.bio}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={profile.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              Google Scholar
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 bg-blue-100 rounded-3xl opacity-60 blur-xl" />
            <img
              src={profile.portrait}
              alt={`${profile.name} portrait`}
              className="relative w-72 h-80 sm:w-80 sm:h-96 object-cover object-top rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
