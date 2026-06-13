
export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-500 max-w-2xl text-base leading-relaxed">{subtitle}</p>}
    </div>
  )
}
