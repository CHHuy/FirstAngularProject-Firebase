// import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import { Change, EventContext } from 'firebase-functions';
import * as firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

const functions = require('firebase-functions');

const axios = require('axios');
const apiTelegram = 'https://api.telegram.org/bot';
// const apiToken = '';
// firebase functions:config:set totoro.token=''
const apiToken = functions.config().totoro.token;
// firebase functions:config:set totoro.chat_id=''
// const CHATID = '-374643212'; // test bot
const CHATID = functions.config().totoro.chat_id;

exports.useWildcard = functions.firestore
  .document('messages/{messageId}')
  // .onWrite((change: Change<DocumentSnapshot>, context: EventContext) => {
  .onCreate((change: Change<DocumentSnapshot>, context: EventContext) => {
    // console.log('change:', change);
    // console.log('context:', context);
    console.log('messageId:', context.params.messageId);
    const data: any = change.after.data();
    const text_content = data ? data.content : '';
    console.log('data.content:', data.content);

    // If we set `/users/marie` to {name: "Marie"} then
    // context.params.userId == "marie"
    // ... and ...
    // change.after.data() == {name: "Marie"}

    if (text_content) {
      axios.post(`${apiTelegram}${apiToken}/sendMessage`,
        {
          chat_id: CHATID,
          text: text_content
        })
        .then((response: any) => {
          console.log(response);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  });
