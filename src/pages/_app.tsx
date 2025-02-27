import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout pathname={pathname}>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
