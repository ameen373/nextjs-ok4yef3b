'use client'

import StatsCard from '@/components/StatsCard'
import { useTelegram } from '@/hooks/useTelegram'

export default function HomePage() {
  const { user } = useTelegram()

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Telegram Ads Platform
        </h1>

        <p className="text-gray-400">
          Welcome {user?.first_name || 'Guest'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatsCard title="Campaigns" value="12" />
        <StatsCard title="Publishers" value="34" />
        <StatsCard title="Revenue" value="$530" />
        <StatsCard title="Views" value="91K" />
      </div>

    </div>
  )
}
