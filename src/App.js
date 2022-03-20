import Navbar from "./Components/Navbar";
import Whitelists from "./Components/Whitelists";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { WhitelistProvider } from "./context/WhitelistContext";

const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/cl0o2umyp8fyt01xkgtt5a0fu/master",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="container lg:w-3/4 mx-auto">
        <WhitelistProvider>
          <Whitelists />
        </WhitelistProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
