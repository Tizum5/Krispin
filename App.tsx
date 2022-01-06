import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Component } from "react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import Home from "./pages/Home";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}
 <div className= "Container">
   <div className="Row">
      <div className="Col">
          <Home />
      </div>
   </div>
 </div>
class connectProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Connected: false
    };
  }
 if (this.state.Connected) {
      if(window.ethereum.selectedAccount) {
      }
      render(
      connected && {<div>template of the page</div>}
  }
export default App;