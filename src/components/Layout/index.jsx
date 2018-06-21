import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { getCurrentLangKey } from 'ptz-i18n';

import munchkinWoff from '../../fonts/munchkin.woff';
import munchkinWoff2 from '../../fonts/munchkin.woff2';

import LanguageSwitcher from '../LanguageSwitcher/index';
import { availableLocales, defaultLocale, getMessages } from '../../i18n';

const textComponent = ({ children }) => children;

const styles = (theme) => ({
  '@global': {
    '@font-face': {
      fontFamily: 'Munchkin',
      src: `
        url(${munchkinWoff2}) format('woff2'),
        url(${munchkinWoff}) format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },

    body: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing.unit,
    },
  },

  header: {
    marginBottom: theme.spacing.unit * 4,
  },
});

// eslint-disable-next-line react/prop-types
const Layout = ({ children, classes, location }) => {
  const locale = getCurrentLangKey(
    availableLocales,
    defaultLocale,
    location.pathname,
  );

  return (
    <IntlProvider
      locale={locale}
      messages={getMessages(locale)}
      textComponent={textComponent}
    >
      <Fragment>
        <Helmet>
          <html lang={locale} />
        </Helmet>

        <CssBaseline />

        <header className={classes.header}>
          <LanguageSwitcher location={location} />
        </header>
        <main>{children}</main>
      </Fragment>
    </IntlProvider>
  );
};

export default withStyles(styles)(Layout);
