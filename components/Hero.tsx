'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { techStack } from '@/constants/data'
import { useEffect, useState } from 'react'

const codeExample = `public class DistributedCacheService<T> 
    where T : class, IEntity
{
    private readonly IMemoryCache _memoryCache;
    private readonly IDistributedCache _distributedCache;
    private readonly ILogger<DistributedCacheService<T>> _logger;
    
    public DistributedCacheService(
        IMemoryCache memoryCache,
        IDistributedCache distributedCache,
        ILogger<DistributedCacheService<T>> logger)
    {
        _memoryCache = memoryCache;
        _distributedCache = distributedCache;
        _logger = logger;
    }
    
    public async Task<T?> GetOrSetAsync(
        string key, 
        Func<Task<T>> factory,
        TimeSpan? expiration = null)
    {
        return await _memoryCache.GetOrCreateAsync(
            key, 
            async entry =>
            {
                entry.AbsoluteExpirationRelativeToNow = 
                    expiration ?? TimeSpan.FromMinutes(30);
                
                var cached = await _distributedCache
                    .GetStringAsync(key);
                    
                if (cached is not null)
                {
                    return JsonSerializer.Deserialize<T>(cached);
                }
                
                var value = await RetryPolicy.ExecuteAsync(
                    async () => await factory(),
                    maxRetries: 3);
                    
                await _distributedCache.SetStringAsync(
                    key,
                    JsonSerializer.Serialize(value),
                    new DistributedCacheEntryOptions
                    {
                        AbsoluteExpirationRelativeToNow = expiration
                    });
                    
                return value;
            });
    }
    
    private static readonly IRetryPolicy RetryPolicy = 
        Policy.Handle<HttpRequestException>()
            .Or<TimeoutException>()
            .WaitAndRetryAsync(
                retryCount: 3,
                sleepDurationProvider: retryAttempt => 
                    TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)),
                onRetry: (exception, timeSpan, retryCount, context) =>
                {
                    // Logging retry attempt
                    context.GetLogger()?.LogWarning(
                        "Retry {RetryCount} after {Delay}s",
                        retryCount, timeSpan.TotalSeconds);
                });
}`

// Simple syntax highlighting for C#
const highlightCode = (line: string, lineIndex: number) => {
  if (!line.trim()) return <span className="block">{'\u00A0'}</span>
  
  const keywords = /\b(public|private|class|async|await|var|return|readonly|string|Task|static|where|if|is|not|null|Func|TimeSpan|TimeSpan\.FromMinutes|TimeSpan\.FromSeconds|Math\.Pow)\b/g
  const types = /\b(IMemoryCache|IDistributedCache|ILogger|DistributedCacheService|DistributedCacheEntryOptions|IEntity|HttpRequestException|TimeoutException|IRetryPolicy|Policy|JsonSerializer)\b/g
  const generics = /<T>|<T\?>|<T,>/g
  const methods = /\b(GetOrSetAsync|GetOrCreateAsync|GetStringAsync|SetStringAsync|ExecuteAsync|Deserialize|Serialize|Handle|Or|WaitAndRetryAsync|onRetry|LogWarning)\b/g
  const numbers = /\b(\d+)\b/g
  const strings = /"[^"]*"/g
  
  const parts: Array<{ text: string; className: string; key: string }> = []
  
  // Find all matches with their positions
  const matches: Array<{ start: number; end: number; className: string; text: string }> = []
  
  let match
  while ((match = keywords.exec(line)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      className: 'text-blue-400',
      text: match[0]
    })
  }
  
  types.lastIndex = 0
  while ((match = types.exec(line)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      className: 'text-purple-400',
      text: match[0]
    })
  }
  
  generics.lastIndex = 0
  while ((match = generics.exec(line)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      className: 'text-yellow-400',
      text: match[0]
    })
  }
  
  methods.lastIndex = 0
  while ((match = methods.exec(line)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      className: 'text-green-400',
      text: match[0]
    })
  }
  
  numbers.lastIndex = 0
  while ((match = numbers.exec(line)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      className: 'text-orange-400',
      text: match[0]
    })
  }
  
  strings.lastIndex = 0
  while ((match = strings.exec(line)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      className: 'text-green-300',
      text: match[0]
    })
  }
  
  // Sort matches by position
  matches.sort((a, b) => a.start - b.start)
  
  // Remove overlapping matches (keep first)
  const filteredMatches: typeof matches = []
  let lastEnd = -1
  for (const m of matches) {
    if (m.start >= lastEnd) {
      filteredMatches.push(m)
      lastEnd = m.end
    }
  }
  
  // Build parts
  let lastPos = 0
  filteredMatches.forEach((m, idx) => {
    if (m.start > lastPos) {
      parts.push({
        text: line.substring(lastPos, m.start),
        className: 'text-gray-300',
        key: `text-${lineIndex}-${idx}`
      })
    }
    parts.push({
      text: m.text,
      className: m.className,
      key: `highlight-${lineIndex}-${idx}`
    })
    lastPos = m.end
  })
  
  if (lastPos < line.length) {
    parts.push({
      text: line.substring(lastPos),
      className: 'text-gray-300',
      key: `text-end-${lineIndex}`
    })
  }
  
  if (parts.length === 0) {
    return <span className="block text-gray-300">{line}</span>
  }
  
  return (
    <span className="block">
      {parts.map(part => (
        <span key={part.key} className={part.className}>
          {part.text}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
      }

  return (
    <section
      id="hero"
      aria-label="Section principale - Présentation"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Presentation */}
          <motion.div
            {...motionProps}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Ingénieur Développeur .NET</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="gradient-text">Joffrey</span>
              <br />
              <span className="gradient-accent-text">LEMERY</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-8 leading-relaxed font-light italic"
            >
              &quot;Ma curiosité me pousse là où le code devient complexe et l&apos;ingénierie indispensable.&quot;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed"
            >
              Expert & Amateur de défis
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="px-5 py-2.5 glass rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-gray-300">{tech}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8"
            >
              <motion.a
                href="#skills"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex flex-col items-center lg:items-start gap-3 text-gray-400 hover:text-foreground transition-colors group"
              >
                <span className="text-sm font-medium">Découvrir mon parcours</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronDown size={24} className="text-blue-400" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <div className="glass rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-400 ml-2 font-mono">DistributedCacheService.cs</span>
              </div>
              <div className="p-4 overflow-x-auto max-h-[500px] overflow-y-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="block">
                    {codeExample.split('\n').map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="min-h-[1.5rem]"
                      >
                        {highlightCode(line, index)}
                      </motion.div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

