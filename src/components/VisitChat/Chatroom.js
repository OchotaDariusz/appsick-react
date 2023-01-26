import {initializeApp} from "firebase/app";
import {
    getFirestore, collection, doc, onSnapshot, getDocs, addDoc, deleteDoc,
    query, where, orderBy
} from "firebase/firestore";
import {getUser} from "../Auth/Auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

class Chatroom {
    constructor(visitId, userId, author) {
        this.visitId = visitId;
        this.userId = userId;
        this.author = author;
        this.chats = collection(db, 'appsick-visits');
        this.unsub = () => {
        }
    }

    async addChat(message) {
        const chat = {
            message: message,
            author: this.author,
            userId: this.userId,
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
        const user = await getUser()
        if (user?.id && user?.role === "PATIENT") return;

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
        fetch("${process.env.REACT_APP_BACKEND_HOST}/api/chats", {
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