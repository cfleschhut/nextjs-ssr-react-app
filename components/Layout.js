import { Pane } from 'evergreen-ui';
import Header from './Header';

const Layout = props => (
  <Pane padding={16} border>
    <Header />
    {props.children}
  </Pane>
);

export default Layout;
