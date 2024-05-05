export default function Section({
  left,
  right,
}: {
  left: React.ReactNode
  right: React.ReactNode
}) {
  return (
    <div className="w-full pt-5 pb-5 grid grid-cols-12 gap-4 border-b border-neutral-400 lg:border-0">
      <div className="col-span-12 lg:col-span-4">{left}</div>
      <div className="col-span-12 lg:col-span-8">{right}</div>
    </div>
  )
}
