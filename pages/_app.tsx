import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@3rdweb/react'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
	// ethereum chain ids of the chains supported
	// Ethereun Mainnet - 1 (ETH)
	// Ropsten Test Network - 3 (ETH)
	// Rinkeby Test Network - 4 (ETH)
	// Kovan Test Network -  42 (ETH)
	// Polygon Mumbai Test Network - 80001 (MATIC)
	const supportedChainIds = [1, 3, 4, 42, 80001]

	// connectors supported
	// metamask: injected
	const connectors = {
		injected: {}
	}

	return (
		<ThirdwebProvider
			connectors={connectors}
			supportedChainIds={supportedChainIds}
		>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</ThirdwebProvider>
	)
}

export default MyApp
