import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import {React, Component} from 'react';


class Hockey extends Component {
  constructor(props) {
    super(props)
  }



  render(){
    return(
      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="TheDeJtv"
      options={{height: 400}}
    />
    )
  }
}



export default Hockey