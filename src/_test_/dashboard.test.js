import React from 'react';
import uuid from 'uuid/v4';
import ExpenseForm from '../note-create-form/note-create-form';
import './dashboard.scss';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  beforeEach(() => {
    // "mount" will actually mount the component directly to the DOM even though we don't see it
    mountedDashboard = mount(<Dashboard />);
  });
  afterEach(() => {
    // after each test, we take the component out of the DOM to complete our setup/teardown test process
    mountedDashboard.unmount();
  });

  test('Simple test for initial state', () => {
    expect(mountedDashboard.state('note-creates')).toEqual([]);
  });

  test('Adding a new note-create to the state', () => {
    const mocknoteCreate = [{ title: 'fake', note: 'My note', _id: '1234' }];
    mountedDashboard.setState({ noteCreates: mocknoteCreate });
    expect(mountedDashboard.state('note-creates')).toEqual(mocknoteCreate);
    expect(mountedDashboard.state('note-creates')).toHaveLength(1);
    expect(mountedDashboard.find('p').text()).toEqual('');
  });
});