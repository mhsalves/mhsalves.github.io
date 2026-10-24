import React from 'react';
import Error from 'next/error';

// Project sites that moved when their repository was renamed. GitHub Pages has
// no server-side redirects, so an old link lands on this page, and the script
// sends it on with the rest of the path, the query string and the hash intact.
const MOVED = {
  '/yugioh-fb-catalog': '/yugioh-fm-catalog',
};

// Inline so it runs while the HTML is parsed, before React loads.
const redirect = `(function () {
  var moved = ${JSON.stringify(MOVED)};
  var l = window.location;
  for (var from in moved) {
    if (l.pathname === from || l.pathname.indexOf(from + '/') === 0) {
      l.replace(moved[from] + l.pathname.slice(from.length) + l.search + l.hash);
      return;
    }
  }
})();`;

function NotFound() {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <Error statusCode={404} />
    </>
  );
}

export default NotFound;
