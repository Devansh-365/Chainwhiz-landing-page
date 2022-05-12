import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Layout from '../components/Layout';
import { theme } from '../chakra/theme';
// import { AuthProvider } from '../context/AuthContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ThirdwebProvider>
    // </AuthProvider>
  )
}

export default MyApp
