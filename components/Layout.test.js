import Layout from './Layout';

describe('Layout component', () => {
  it('renders with title and children', () => {
    const wrapper = shallow(
      <Layout title="Here's the title">Here's the children.</Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
