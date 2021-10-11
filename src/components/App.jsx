import React, { Component } from 'react';
import Form from '../components/Form/Form';
import Contacts from '../components/Contacts/Contacts';
import Filter from '../components/Filter/Filter';
import css from '../components/Form/Form.module.css';

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
