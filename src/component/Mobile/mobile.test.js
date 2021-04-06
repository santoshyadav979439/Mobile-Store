import React from 'react'
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mobile from './mobile'
configure({adapter:new Adapter()});

describe("<Mobile/>",()=>{
it("should render two buttons",()=>{
        const wrapper= shallow(<Mobile/>);
        expect(wrapper.find('button')).toHaveLength(2)
})
})