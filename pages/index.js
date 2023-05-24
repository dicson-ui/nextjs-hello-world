import Link from 'next/link'
const Index = () => (
  <div>
    Hello Dicson.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
