import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, doc, onSnapshot, getDocs, addDoc, deleteDoc,
  query, where, orderBy
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1zVAMyBXiP0ogswxRs4_m5M81x3Yer5o",
  authDomain: "appsick-38f18.firebaseapp.com",
  projectId: "appsick-38f18",
  storageBucket: "appsick-38f18.appspot.com",
  messagingSenderId: "30245671795",
  appId: "1:30245671795:web:17e60a9979053eb9082b06",
  measurementId: "G-J6XPY8ZXCP"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

class Chatroom {
  constructor(visitId, author) {
    this.visitId = visitId;
    this.author = author;
    this.chats = collection(db, 'appsick-visits');
    this.unsub = () => {
    }
  }

  async addChat(message) {
    const chat = {
      message: message,
      author: this.author,
      visitId: this.visitId,
      date: new Date()
    };
    return await addDoc(this.chats, chat);
  }

  async getChats(callback, setterFn) {
    this.unsub()
    const queryResults = query(
      this.chats,
      where('visitId', '==', this.visitId),
      orderBy('date')
    );
    this.unsub = onSnapshot(queryResults, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          setterFn(prevMessages => [...prevMessages, change.doc.data()])
        }
      });
    })
    const querySnapshot = await getDocs(queryResults)
    querySnapshot.forEach((doc) => {
      callback(doc.data())
    })
  }

  async endVisit(callback) {
    this.unsub()
    const queryResults = query(
      this.chats,
      where('visitId', '==', this.visitId),
      orderBy('date')
    )
    const querySnapshot = await getDocs(queryResults)
    const chatHistory = []
    let chatMessage;
    querySnapshot.forEach((doc) => {
      chatMessage = doc.data()
      chatMessage.date = new Date(chatMessage.date.toDate())
      chatHistory.push(chatMessage)
    })
    fetch("http://localhost:8080/api/chats", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(chatHistory)
    })
      .then(() => {
        getDocs(queryResults)
          .then(snapshot => {
            snapshot.docs.forEach(snapshotDoc => {
              const idToRemove = snapshotDoc.id
              const docRef = doc(db, 'appsick-visits', idToRemove)
              deleteDoc(docRef)
            })
            callback([])
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => console.log(err.message))

  }
}

export default Chatroom