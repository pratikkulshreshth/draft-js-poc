import React from 'react';
import { shallow } from 'enzyme';

import BlockStyleControls from './BlockStyleControls';

describe('BlockStyleControls', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<BlockStyleControls debug />);

        expect(component).toMatchSnapshot();
    });
});
