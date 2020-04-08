import React from 'react';
import { shallow } from 'enzyme';

import InlineStyleControls from './InlineStyleControls';

describe('InlineStyleControls', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<InlineStyleControls debug />);

        expect(component).toMatchSnapshot();
    });
});
