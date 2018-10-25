import Link from 'next/link';

const Index = () => (
  <div>
    <p>Hello Next</p>
    <Link href="/about">
      <button style={{ fontSize: '20px' }}>About Page</button>
    </Link>
  </div>
);

export default Index;
