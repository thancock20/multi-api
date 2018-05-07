import Layout from './Layout';

describe('Layout component', () => {
  it('renders with children and title', () => {
    const wrapper = shallow(
      <Layout title="Here's the title">Here's the children.</Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with children and no title', () => {
    const wrapper = shallow(<Layout>Here's the children.</Layout>);
    expect(wrapper).toMatchSnapshot();
  });
});
