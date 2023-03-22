import { Contract, providers, utils } from 'ethers'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import Web3Modal from 'web3modal'
import { abi, NFT_CONTRACT_ADDRESS } from '../../constants'
import styles from '../styles/Home.module.css'
import { v4 as uuidV4 } from 'uuid'
import { BsCheckLg, BsHandThumbsUp, BsTrashFill } from 'react-icons/bs'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

export default function Home () {
  const [nfts, setNfts] = useState([])
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [finished, setFinished] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const [addToLocalStorage, setAddToLocalStorage] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)
  const [address, setAddress] = useState()
  const [loading, setLoading] = useState(false)
  const web3ModalRef = useRef()
  const [renderConf, setRenderConf] = useState(false)
  const { width, height } = useWindowSize()

  useEffect(() => {
    if (getFromStorage('Todos')) {
      setTodos(JSON.parse(getFromStorage('Todos')))
    }
  }, [])

  useEffect(() => {
    todos.every(isSameAnswer)
    function isSameAnswer (el, index, arr) {
      if (index === 0) {
        return true
      } else {
        setFinished(
          el.completed === true &&
            arr[index - 1].completed === true &&
            !arr[index].deleted &&
            !arr[index - 1].deleted
        )
        return el.completed === true && arr[index - 1].completed === true
      }
    }
    if (addToLocalStorage) {
      setLocalStorage('Todos', JSON.stringify(todos))
    }
  }, [todos])

  const shortenAdd = address => {
    const textAddr = '' + address + ''
    if (address) {
      return (
        textAddr.substring(0, 5) +
        '......' +
        textAddr.substring(32, address?.length)
      )
    }
  }

  const renderNFTs = () => {
    console.log('fetching ...')
    if (typeof nfts === 'object' && nfts.length !== 0) {
      return (
        <div style={{ backgroundColor: 'rgb(22, 23, 34)', padding: '20px 0' }}>
          <h1
            className={`text-center ${styles.title}`}
            style={{ margin: '20px' }}
          >
            Your NFT(s)
          </h1>
          <div className='d-flex j-content-center'>
            {nfts.map(nft => {
              return (
                <div key={nft.id}>
                  <img
                    src={`${process.env.IMG_URL}${nft.tokenID}.png`}
                    width={100}
                    height={100}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
  const fetchNft = () => {
    fetch(
      `https://api-goerli.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${process.env.CONTRACT_ADDR}&address=${address}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${process.env.GOERLI_API_KEY}`
    )
      .then(res => res.json())
      .then(result => {
        setNfts(result.result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value)
    }
  }

  const addTodo = e => {
    e.preventDefault()
    if (todo === '') return
    setTodos([
      ...todos,
      {
        id: uuidV4(),
        todo: todo,
        completed: false,
        deleted: false
      }
    ])
    setTodo('')
    setAddToLocalStorage(true)
  }

  const getFromStorage = key => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key)
    }
  }

  const setCompleted = id => {
    setTodos(prevTodos => {
      const updatedItems = prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true
          }
        }
        return todo
      })
      setAddToLocalStorage(true)
      return updatedItems
    })
  }

  const setDeleted = id => {
    setTodos(todos => {
      const updatedItems = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
            deleted: true
          }
        }
        return todo
      })
      setAddToLocalStorage(true)
      return updatedItems
    })
  }

  const removeLists = () => {
    setLocalStorage('Todos', '')
    setTodos([])
  }

  const claimNFT = async () => {
    try {
      const signer = await getProviderOrSigner(true)

      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer)
      const tx = await nftContract.mint({
        value: utils.parseEther('0.00')
      })
      setLoading(true)
      await tx.wait()
      setLoading(false)
      setClaimed(true)
      setRenderConf(true)
      removeLists()
      window.alert('You successfully claimed your NFT reward!')
    } catch (err) {
      console.error(err)
    }
  }

  const connectWallet = async () => {
    try {
      const providerOrSigner = await getProviderOrSigner()
      const address = providerOrSigner.provider.selectedAddress
      setAddress(address)
      if (address) {
        setWalletConnected(true)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect()
    const web3Provider = new providers.Web3Provider(provider)
    const { chainId } = await web3Provider.getNetwork()
    if (chainId !== 5) {
      window.alert('Change the network to Goerli')
      throw new Error('Change network to Goerli')
    }

    if (needSigner) {
      const signer = web3Provider.getSigner()
      return signer
    }
    return web3Provider
  }

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: 'goerli',
        providerOptions: {},
        disableInjectedProvider: false
      })
    }
    fetchNft()
    renderButton()
  }, [walletConnected, claimed])

  const RenderConnectBtn = () => {
    return (
      <button onClick={connectWallet} className={`${styles.button} w-100`}>
        Connect your wallet
      </button>
    )
  }
  const renderConfetti = () => {
    setTimeout(() => {
      setRenderConf(false)
    }, 5000)
    if (claimed && renderConf) {
      return <Confetti width={width} height={height} />
    }
  }
  const renderButton = () => {
    if (claimed) {
      return (
        <button
          className={`w-100 ${styles.button}`}
          onClick={() => {
            setFinished(!claimed)
            setClaimed(!finished)
          }}
        >
          NFT Claimed!
        </button>
      )
    }

    if (loading) {
      return <button className={`w-100 ${styles.button}`}>Claiming...</button>
    }

    if (finished && !claimed && walletConnected) {
      return (
        <button className={`w-100 ${styles.button}`} onClick={claimNFT}>
          Claim NFT!
        </button>
      )
    }
  }

  const renderButtonRm = () => {
    if (finished && todos.length !== 0) {
      return (
        <button
          onClick={removeLists}
          className={`${styles.trash} d-flex w-100 j-content-center`}
        >
          <BsTrashFill />
        </button>
      )
    }
  }

  return (
    <>
      <Head>
        <title>My Todos</title>
        <meta name='og:title' content='My Todos DApp - Claim an NFT reward for every full list that is completed!' />
        <meta
          name='description'
          content='My Todos DApp - Claim an NFT reward for every full list that is completed!'
        />
        <meta property='og:image' content='/mytodos.gif' />
        <meta name='twitter:image' content='/mytodos.gif' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className={styles.main} id='main'>
        <div className={styles.card}>
          {renderConfetti()}
          <h1 className={styles.title}>My Todos</h1>
          {shortenAdd(address)}
          <p>Be rewarded with an NFT!</p>
          <div className={styles.description}>
            <form className='d-flex'>
              <input value={todo} onChange={e => setTodo(e.target.value)} />
              <button
                onClick={e => {
                  addTodo(e)
                }}
              >
                +
              </button>
            </form>
            {todos
              .filter(({ deleted }) => !deleted)
              .map(({ todo, completed, id }) => (
                <div className='d-flex' key={id}>
                  <p className='m-auto' style={{ width: '10.2rem' }}>
                    {todo}
                  </p>
                  {completed ? (
                    <BsHandThumbsUp
                      className='my-auto'
                      style={{ marginRight: '5px' }}
                    />
                  ) : (
                    <div style={{ margin: 'auto 0' }}>
                      <button
                        onClick={() => {
                          setCompleted(id)
                        }}
                        className={styles.completed}
                      >
                        <BsCheckLg />
                      </button>
                    </div>
                  )}
                  <div style={{ margin: 'auto 0' }}>
                    <button
                      onClick={() => {
                        setDeleted(id)
                      }}
                      className={styles.trash}
                    >
                      <BsTrashFill />
                    </button>
                  </div>
                </div>
              ))}
            <div className='d-flex'>
              {!walletConnected ? <RenderConnectBtn /> : ''}
              {renderButton()}
              {renderButtonRm()}
            </div>
          </div>
        </div>
      </div>
      {renderNFTs()}
    </>
  )
}
