import { useState, useEffect } from 'react'
import abi from "./contractJson/chai.json"
import { ethers } from "ethers"
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Memos from './components/Memos'
import Buy from './components/Buy'
// import chai from "./Pictures/";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected');
  useEffect(() => {
    const template = async () => {

      const contractAddres = "0xa238DDE6f74A80A1D80fA2A7e4D6369b216f7f24";
      const contractABI = abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try {

        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })

        window.ethereum.on("accountsChanged", () => {
          window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer = provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
        setState({ provider, signer, contract });

      } catch (error) {
        console.log(error)
      }
    }
    template();
  }, [])
  return (
    <Container>
      <Row md={4}>
        {/* <Col> <p> <small>Connected Account - {account}</small> </p> </Col> */}
        <Col>ToDo List</Col>
        <Col xs={6}><Buy state={state} /></Col>
        <Col><Memos state={state} /></Col>
      </Row>
    </Container>
  )
}
export default App