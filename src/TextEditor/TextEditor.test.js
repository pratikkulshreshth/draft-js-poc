import React from 'react';
import { shallow } from 'enzyme';

import TextEditor from './TextEditor';

describe('TextEditor', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<TextEditor debug />);

        expect(component).toMatchSnapshot();
    });
});
