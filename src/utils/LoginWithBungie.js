import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import keys from './keys'

export default function LoginWithBungie() {
  const authorisationState = uuidv4();
  const authorisationURL = `https://www.bungie.net/en/oauth/authorize?client_id=${keys.OAUTH_CLIENT_ID}&response_type=code&state=${authorisationState}`

    return (
      <div>
        <section className="login">
          <a href={authorisationURL}>Login With Bungie</a>
        </section>
      </div>
    )
}
