import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	// ethereum chain ids of the chains supported
	// Ethereun Mainnet - 1 (ETH)
	// Ropsten Test Network - 3 (ETH)
	// Rinkeby Test Network - 4 (ETH)
	// Kovan Test Network -  42 (ETH)
	// Polygon Mumbai Test Network - 80001 (MATIC)
	const supportedChainIds = [1, 3, 4, 42, 80001]

	return <Component {...pageProps} />
}

export default MyApp
