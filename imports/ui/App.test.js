import React from 'react';
import { Meteor } from 'meteor/meteor';
import { shallow }  from 'enzyme';
import { assert } from 'chai';

// import App from './App';

if (Meteor.isClient) {
  describe('App Tests', () => {
    it('Renders App', () => {
      // const wrapper = shallow(<App />);
      // console.log(wrapper.props);
    });
  });
}
