export function BackgroundGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[160px]" />
    </div>
  )
}
