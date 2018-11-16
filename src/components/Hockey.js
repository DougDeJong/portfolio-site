import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


const Hockey = () => {

    return(
      <div>
      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="TheDeJtv"
      options={{height: 400}}
    />
    </div>
    )
  }




export default withRouter(Hockey);