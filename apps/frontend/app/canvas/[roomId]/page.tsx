import { RoomCanvas } from '@/app/components/RoomCanvs';

// Match the generated PageProps interface
interface PageProps {
  params: Promise<{ roomId: string }>; // Wrap params in Promise
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // Optional, but consistent
}

export default async function CanvasPage({ params }: PageProps) {
  const resolvedParams = await params; // Await the Promise to get the actual params
  return <RoomCanvas roomId={resolvedParams.roomId} />;
}