import Header from './Header';

describe('Header component', () => {
  it('renders with a title', () => {
    const wrapper = shallow(<Header title="This is the title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
