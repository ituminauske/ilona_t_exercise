import type { AppProps } from 'next/app';
import '../global.css';
import { Provider } from 'react-redux';
import store from '../redux/store';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => {



   return <Provider store={store}><Component {...pageProps} /></Provider>;
}

export default QogitaApp;
