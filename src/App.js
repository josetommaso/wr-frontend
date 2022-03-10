import Navbar from "./Components/Navbar";
import Whitelists from "./Components/Whitelists";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wr-backend-q6vf8.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="container mx-auto">
        <Whitelists />
      </div>
    </ApolloProvider>
  );
}

export default App;
