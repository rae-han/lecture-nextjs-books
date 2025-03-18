interface LecturePageProps {
  params: Promise<{ id: string[] }>;
}

export default async function LecturePage({ params }: LecturePageProps) {
  const { id } = await params;

  console.log({id})

  if (!id) {
    return <div>Lecture page.</div>;
  }

  return <div>catch all Lecture [{Array.isArray(id) ? id.join(',') : id}] page.</div>;
}
