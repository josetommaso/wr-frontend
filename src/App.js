import Navbar from "./Components/Navbar";
import Whitelists from "./Components/Whitelists";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-dark h-screen">
        <Navbar />
        <div className="container mx-auto">
          <Whitelists />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
