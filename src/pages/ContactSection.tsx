import { Mail, MapPin, Phone } from 'lucide-react'
import data from '../data.json'

export function ContactSection() {
  const { profile } = data
  return (
    <section className="py-16 px-6 lg:px-12 bg-white min-h-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">Contact Details</h2>

      <div className="max-w-lg divide-y divide-gray-100">

        {/* Address */}
        <div className="flex items-start gap-5 py-7">
          <MapPin className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Address</p>
            <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">{profile.address}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-5 py-7">
          <Mail className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Email Id</p>
            <a href={`mailto:${profile.email}`} className="block text-base font-medium text-blue-600 hover:underline underline-offset-2">
              {profile.email}
            </a>
            {profile.emailAlt && (
              <a href={`mailto:${profile.emailAlt}`} className="block text-base font-medium text-blue-600 hover:underline underline-offset-2 mt-1">
                {profile.emailAlt}
              </a>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-5 py-7">
          <Phone className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Contact No.</p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 w-14">Office:</span>
                <a href={`tel:${profile.phone}`} className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
                  {profile.phone}
                </a>
              </div>
              {profile.mobile && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-14">Mobile:</span>
                  <a href={`tel:${profile.mobile}`} className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
                    {profile.mobile}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
