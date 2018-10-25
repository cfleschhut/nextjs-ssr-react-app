import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <div>
    <Layout>
      <p>Hello Next</p>
      <Link href="/about">
        <button style={{ fontSize: 20 }}>About Page</button>
      </Link>
    </Layout>
  </div>
);

export default Index;
