import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import locals from "../locals";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  const localeCode = (router.locale ?? router.defaultLocale) as string;
  const locale = locals[localeCode];

  return (
    <IntlProvider
      messages={locale.messages}
      locale={localeCode}
      defaultLocale={router.defaultLocale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
