export default function BlockBoxHeader({ text }: { text: string }) {
  return (
    <div className="w-full text-xl text-neutral-800 italic pb-2 mb-7 border-b border-neutral-400">
      {text}
    </div>
  )
}
