import App from '../src/components/App'
import React from 'react'
import {shallow} from 'enzyme'

describe('App',()=>{
    test('should match snapshot',()=>{
        const wrapper = shall(<App/>)

        expect(wrapper.find('div'.text()).toBe('Welcome to boilerplate!'))
        expect(wrapper).toMatchSnapshot()
    })
})