export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* header */}
      <header className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* name */}
        <h1 className="text-6xl font-bold">
          Kon
        </h1>
        {/* description */}
        <p className="mt-3 text-2xl">
          Kon's personal website
        </p>
      </header>
    </div>
  )
}
