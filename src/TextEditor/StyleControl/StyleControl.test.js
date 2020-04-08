import React from 'react';
import { shallow } from 'enzyme';

import StyleControl from './StyleControl';

describe('StyleControl', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<StyleControl debug />);

        expect(component).toMatchSnapshot();
    });
});
