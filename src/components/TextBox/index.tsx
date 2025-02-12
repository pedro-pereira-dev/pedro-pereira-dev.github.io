export interface TextBoxType {
  title: string
  text: string[]
}

export default function TextBox({ title, text }: TextBoxType) {
  return (
    <div className="w-full h-full">
      <div className="mb-2 text-black text-lg">{title}</div>
      {text.map((_text, key) => (
        <div key={key} className="text-sm mb-2">
          {_text}
        </div>
      ))}
    </div>
  )
}
