import { RETWEET_COLLECTION, USER_COLLECTION, LIKES_COLLECTION  } from "../firebase"

export default async(tweet, currentUser) => {
  const doc = await USER_COLLECTION.doc(tweet.uid).get()
  tweet.profile_image_url = doc.data().profile_image_url
  tweet.email = doc.data().email
  tweet.username = doc.data().username
  // tweet = {...tweet, ...doc.data()}

  const retweetSnapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==", tweet.id).where("uid", "==", currentUser.uid).get()
  if (retweetSnapshot.empty) {
    tweet.isRetweeted = false
  } else {
    tweet.isRetweeted = true
  }

  const likeSnapshot = await LIKES_COLLECTION.where("from_tweet_id", "==", tweet.id).where("uid", "==", currentUser.uid).get()
  if (likeSnapshot.empty) {
    tweet.isLiked = false
  } else {
    tweet.isLiked = true
  }
  return tweet
}