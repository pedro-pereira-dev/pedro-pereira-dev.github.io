export default function TextBox({
  title,
  content,
}: {
  title: string
  content: React.ReactNode[]
}) {
  return (
    <div className="w-full h-full">
      <div className="mb-2 text-black text-lg">{title}</div>
      {content.map((text, key) => (
        <div key={key} className="text-sm mb-2">
          {text}
        </div>
      ))}
    </div>
  )
}
