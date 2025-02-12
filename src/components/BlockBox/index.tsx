export default function BlockBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-full max-w-6xl p-10 bg-white bg-opacity-80">
        {children}
      </div>
    </div>
  )
}
