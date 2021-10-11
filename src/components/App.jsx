import React, { Component } from 'react';
import Form from '../components/Form/Form';
import Contacts from '../components/Contacts/Contacts';
import Filter from '../components/Filter/Filter';

export default class App extends Component {
  render() {
    return (
      <>
        <Form />
        <Filter />
        <Contacts />
      </>
    );
  }
}
