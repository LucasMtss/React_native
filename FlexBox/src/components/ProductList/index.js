import React, {useState} from 'react';
import Product from './Product';
import {View} from 'react-native';
import styles from './styles';

function ProductList() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      image:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
      title: 'Acne Studios',
      description: 'Andrea nappa dusty pink',
      price: 'R$50,00',
    },
    {
      id: 2,
      image:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
      title: 'Acne Studios',
      description: 'Lain pop sky blue',
      price: 'R$70,00',
    },
    {
      id: 3,
      image:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
      title: 'Acne Studios',
      description: 'Andrea nappa dusty pink',
      price: 'R$30,00',
    },
    {
      id: 4,
      image:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
      title: 'Acne Studios',
      description: 'Lain pop sky blue',
      price: 'R$70,00',
    },
    {
      id: 5,
      image:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
      title: 'Acne Studios',
      description: 'Lain pop sky blue',
      price: 'R$70,00',
    },
    {
      id: 6,
      image:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
      title: 'Acne Studios',
      description: 'Lain pop sky blue',
      price: 'R$70,00',
    },
  ]);

  return (
    <View style={styles.container}>
      {produtos.map(prod => (
        <Product key={prod.id} product={prod} />
      ))}
    </View>
  );
}

export default ProductList;
