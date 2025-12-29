export function SkillsSkeleton() {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="h-16 bg-white/5 rounded-lg mb-20 w-64 mx-auto animate-pulse" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 border border-white/10 animate-pulse"
            >
              <div className="h-6 bg-white/5 rounded mb-6 w-3/4" />
              <div className="space-y-4">
                {[1, 2, 3].map((j) => (
                  <div key={j}>
                    <div className="h-4 bg-white/5 rounded mb-2 w-full" />
                    <div className="h-2 bg-white/5 rounded w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ExperienceSkeleton() {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] min-h-[400px]">
      <div className="max-w-6xl mx-auto">
        <div className="h-16 bg-white/5 rounded-lg mb-20 w-80 mx-auto animate-pulse" />
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 border border-white/10 animate-pulse"
            >
              <div className="h-8 bg-white/5 rounded mb-4 w-1/2" />
              <div className="h-4 bg-white/5 rounded mb-6 w-3/4" />
              <div className="space-y-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-3 bg-white/5 rounded w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 relative min-h-[400px]">
      <div className="max-w-7xl mx-auto">
        <div className="h-16 bg-white/5 rounded-lg mb-20 w-64 mx-auto animate-pulse" />
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 border border-white/10 animate-pulse"
            >
              <div className="h-8 bg-white/5 rounded mb-4 w-3/4" />
              <div className="h-4 bg-white/5 rounded mb-2 w-full" />
              <div className="h-4 bg-white/5 rounded mb-2 w-5/6" />
              <div className="h-4 bg-white/5 rounded mb-6 w-4/6" />
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-6 bg-white/5 rounded-full w-20" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ContactSkeleton() {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 relative min-h-[400px]">
      <div className="max-w-5xl mx-auto">
        <div className="h-16 bg-white/5 rounded-lg mb-20 w-48 mx-auto animate-pulse" />
        <div className="glass-strong rounded-3xl p-10 border border-white/10 animate-pulse">
          <div className="h-4 bg-white/5 rounded mb-4 w-full" />
          <div className="h-4 bg-white/5 rounded mb-4 w-5/6 mx-auto" />
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-white/5 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

