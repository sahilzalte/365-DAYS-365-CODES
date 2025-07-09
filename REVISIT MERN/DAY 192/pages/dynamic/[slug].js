
import { useRouter } from 'next/router';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Dynamic Route: {slug}</h1>;
}
