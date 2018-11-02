import { Heading, Paragraph } from 'evergreen-ui';
import Layout from '../components/Layout';

const About = () => (
  <div>
    <Layout>
      <Heading size={800} marginBottom={16}>
        About Page
      </Heading>
      <Paragraph marginBottom={16}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        modi at, et officiis facere, illum odit ex eaque in possimus repudiandae
        sunt mollitia tempore aspernatur laborum optio suscipit dolor minus.
      </Paragraph>
    </Layout>
  </div>
);

export default About;
