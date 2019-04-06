import React, { Component } from 'react';
import AppNavbar from '../ItemList-MREN-Redux/companents/appNavbar'
import ItemList from '../ItemList-MREN-Redux/companents/ItemList'
import ItemModal from '../ItemList-MREN-Redux/companents/itemModal'

import {Container} from 'reactstrap'
import {Provider} from 'react-redux'
import store from '../ItemList-MREN-Redux/store'
import { loadUser } from "../ItemList-MREN-Redux/actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css'

class ItemlistMrenRedux extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App ItemlistMrenRedux">
          <AppNavbar/>
          <Container>
            <ItemModal/>
            <ItemList/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default ItemlistMrenRedux;
