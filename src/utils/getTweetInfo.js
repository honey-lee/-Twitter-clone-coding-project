import { RETWEET_COLLECTION, USER_COLLECTION  } from "../firebase"

export default async(tweet, currentUser) => {
  const doc = await USER_COLLECTION.doc(tweet.uid).get()
  tweet.profile_image_url = doc.data().profile_image_url
  tweet.email = doc.data().email
  tweet.username = doc.data().username
  // tweet = {...tweet, ...doc.data()}

  const snapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==", tweet.id).where("uid", "==", currentUser.uid).get()
  if (snapshot.empty) {
    tweet.isRetweeted = false
  } else {
    tweet.isRetweeted = true
  }
  return tweet
}