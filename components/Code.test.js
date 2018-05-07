import Code from './Code';

describe('Code component', () => {
  it('renders with children', () => {
    const wrapper = shallow(<Code>`const x = 1; console.log(x);`</Code>);
    expect(wrapper).toMatchSnapshot();
  });
});
