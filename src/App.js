import { render } from '@testing-library/react';
import { commerce } from './lib/commerce';
import {ProductList} from './ProductList';
import {useState} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
      
    }
    componentDidMount() {
      this.fetchPRoducts()
    }
 
    
    fetchPRoducts() {
      commerce.products.list()
      .then((products)=> {
        TouchList.setState({products: products.data});

      })
      .catch((error) => {
        console.log('there was an error fetching the productrs', error);
      })
    }
    


    render() {
    return (
        <div Classname='app'>
          <Component />
          <ProductList />
          
        </div>
    );
  }
};

export default App;