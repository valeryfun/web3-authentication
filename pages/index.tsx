import type { NextPage } from 'next'
import {
	Container,
	Flex,
	Box,
	Button,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem
} from '@chakra-ui/react'
import { HiChevronDown } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks'
import Head from 'next/head'

const NetworkMetaData = (props: {
	icon: React.ComponentType | string
	chainName: string
	symbol: string
	isTestnet: boolean
}) => {
	const { chainName } = props
	if (!props || !chainName) {
		return <></>
	}
	const { icon, symbol, isTestnet } = props
	const ChainIconElement = icon
	const iconSize = symbol === 'MATIC' ? 5 : 3
	return (
		<Flex gap={2}>
			<Box w={iconSize} h={iconSize}>
				<ChainIconElement />
			</Box>
			<Text>{chainName}</Text>
			{isTestnet && <Text color='grey'>{chainName}</Text>}
		</Flex>
	)
}

const CustomConnectAuth = () => {
	const web3 = useWeb3()
	const {
		address,
		chainId,
		connectWallet,
		disconnectWallet,
		getNetworkMetadata
	} = web3
	const { switchNetwork } = useSwitchNetwork()
	let networkMetaData = null
	if (chainId) {
		networkMetaData = getNetworkMetadata(chainId)
	}

	// if a wallet is connected, show disconnect option and switch network option
	return (
		<>
			{address ? (
				<Menu>
					<MenuButton minH={10} as={Button} rightIcon={<HiChevronDown />}>
						{networkMetaData && <NetworkMetaData {...networkMetaData} />}
					</MenuButton>
					<MenuList>
						<MenuItem onClick={() => switchNetwork(4)}>
							Switch Network to Rinkeby
						</MenuItem>
						<MenuItem onClick={disconnectWallet}>Switch Wallet</MenuItem>
					</MenuList>
				</Menu>
			) : (
				<>
					<Button
						onClick={() => connectWallet('injected')}
						leftIcon={<IoMdWallet />}
						colorScheme='purple'
					>
						Connect to MetaMask
					</Button>
				</>
			)}
		</>
	)
}

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Web3 Authentication</title>
				<meta
					name='description'
					content='Web3 Authentication with Metamask using NextJs'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container maxW='container-md'>
				<Flex flexDirection='column' w='100%' h='100%'>
					<Flex justifyContent='flex-end' m={5}>
						<CustomConnectAuth />
					</Flex>
				</Flex>
			</Container>
		</>
	)
}

export default Home
