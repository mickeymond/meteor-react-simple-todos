import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { shallow }  from 'enzyme';
import { assert, expect } from 'chai';

import Task from './Task';

if (Meteor.isClient) {
  describe('Task Tests', () => {
    const task = {
      text: 'Go to the beach',
      createdAt: new Date(),
      owner: Random.id(),
      username: 'mickeymond',
    }

    it('renders task', () => {
      const wrapper = shallow(<Task task={task} showPrivateButton={true} />);
      expect(wrapper.text()).to.have.string('Go to the beach');
      expect(wrapper.exists('.dele')).to.equal(false);
    });

    it('fails to render task', () => {
      assert.throws(() => {
        shallow(<Task />);
      });
    });
  });
}