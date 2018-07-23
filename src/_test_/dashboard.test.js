import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../components/dashboard/dashboard.scss';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  beforeEach(() => {
    mountedDashboard = mount(<Dashboard />);
  });
  afterEach(() => {
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
