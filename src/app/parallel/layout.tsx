import Link from "next/link";

export default function ParallelLayout({ feed, sidebar, children }: { feed: React.ReactNode, sidebar: React.ReactNode, children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Link href="/parallel/">Parallel</Link>
        &nbsp;
        <Link href="/parallel/setting">Setting</Link>
      </div>
      {feed}
      {sidebar}
      {children}
    </div>
  )
}