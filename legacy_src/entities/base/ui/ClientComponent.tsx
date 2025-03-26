'use client'

import { useEffect } from 'react'

export default function ClientComponent() {
  useEffect(() => {
    console.log('ClientComponent mounted')
  }, [])

  return <div>ClientComponent</div>
}
