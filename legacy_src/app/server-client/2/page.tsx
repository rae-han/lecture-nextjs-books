import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

function ServerClient() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}

export default ServerClient;