import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Heading, Paragraph } from 'evergreen-ui';

const Post = props => (
  <Layout>
    <Heading size={800} marginBottom={16}>
      {props.show.name}
    </Heading>
    <Paragraph marginBottom={16}>
      {props.show.summary.replace(/<[/]?[p|b|i]>/g, '')}
    </Paragraph>
    {props.show.image && <img src={props.show.image.medium} />}
  </Layout>
);

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
