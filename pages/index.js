import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Heading, UnorderedList, ListItem, Link as Anchor } from 'evergreen-ui';
import Layout from '../components/Layout';

const PostLink = ({ show }) => (
  <ListItem>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`} passHref>
      <Anchor size={500}>{show.name}</Anchor>
    </Link>
  </ListItem>
);

const Index = props => (
  <Layout>
    <Heading size={800} marginBottom={16}>
      TVmaze Search API results
    </Heading>

    <UnorderedList>
      {props.shows.map(({ show }) => (
        <PostLink key={show.id} show={show} />
      ))}
    </UnorderedList>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=star+trek');
  const data = await res.json();

  return {
    shows: data,
  };
};

export default Index;
