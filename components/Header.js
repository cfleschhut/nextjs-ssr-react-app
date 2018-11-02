import Link from 'next/link';
import { Card, Link as Anchor } from 'evergreen-ui';

const Header = () => (
  <Card marginBottom={24} padding={16} background="tint2">
    <Link href="/" passHref>
      <Anchor>Home</Anchor>
    </Link>
    <Link href="/about" passHref>
      <Anchor marginLeft={8}>About</Anchor>
    </Link>
  </Card>
);

export default Header;
