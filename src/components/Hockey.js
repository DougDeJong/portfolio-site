import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


const Hockey = () => {

    return(
      <div>
        <p>In my spare time, I play a lot of ice hockey.  Both in the real world and in the digital realm...</p>
        <p>Maybe a little bit more in the digital realm.  I'm part of the exclusive EA Gamechanger program in which EA provides me with games and content in order to keep producing my
          own content on twitch!!! 
        </p>
      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="TheDeJtv"
      options={{height: 400}}
    />
    </div>
    )
  }




export default withRouter(Hockey);