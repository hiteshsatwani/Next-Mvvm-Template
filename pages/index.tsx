import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import View from './components/views/homeView';
import ViewModel from './components/viewModels/homeViewModel';


const Home = () => {
  if (typeof window !== 'undefined') {
    const viewModel = new ViewModel(document);
    return <View viewModel={viewModel} />;
  } else {
    return null
  }
}

export default Home
