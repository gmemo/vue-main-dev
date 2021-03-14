import firebase from 'firebase';
import { ref, onUnmounted} from 'vue';

const config = {
    apiKey: "AIzaSyCqS7fsv6HYgaW8HpmoxvdwHfEXNaemr3s",
    authDomain: "fir-vue-4994f.firebaseapp.com",
    projectId: "fir-vue-4994f",
    storageBucket: "fir-vue-4994f.appspot.com",
    messagingSenderId: "947310034496",
    appId: "1:947310034496:web:697e16615755a3ca9ae9a5"
  };

  const firebaseApp = firebase.initializeApp (config);

  const db = firebaseApp.firestore();
  const userCollection = db.collection('users');

  export const createUser = user => {
      return userCollection.add(user);
  }

  export const getUser = async id => {
      const user = await userCollection.doc(id).get();
      return user.exists ? user.data() : null;
  }

  export const updateUser = (id, user) => {
      return userCollection.doc(id).update(user);
  }

  export const deleteUser = id => {
      return userCollection.doc(id).delete();
  }

  export const useLoadUsers = () => {
      const users = ref ([]);
      const close = userCollection.onSnapshot(snapshot => {
          users.value = snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
      })
      onUnmounted(close);
      return users;
  }