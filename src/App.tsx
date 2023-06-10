import { MantineProvider } from "@mantine/core";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Security from "./pages/Security";
import Notifications from "./pages/Notifications";
import Billing from "./pages/Billing";
import SshKeys from "./pages/SshKeys";
import Databases from "./pages/Databases";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="billing" element={<Billing />} />
            <Route path="security" element={<Security />} />
            <Route path="sshkeys" element={<SshKeys />} />
            <Route path="databases" element={<Databases />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
