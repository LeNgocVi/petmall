import { auth, db } from "../firebase-config";
const cartApi = {
  getCart: () => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("user")
          .doc(currentUser.uid)
          .collection("cart")
          .get()
          .then((query) => {
            query.forEach((doc) => {
              const data1 = doc.data();
              data1.id = doc.id;
              a.push(data1);
            });

            resolve(a);
          });
      }, 500);
    });
  },
  addCart: (newCart) => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("user")
          .doc(currentUser.uid)
          .collection("cart")
          .add(newCart)
          .then((doc) => {
            const document = db
              .collection("user")
              .doc(currentUser.uid)
              .collection("cart")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const data1 = doc.data();
                  data1.id = doc.id;
                  a.push(data1);
                });

                resolve(a);
                console.log("0k");
              });
          });
      }, 500);
    });
  },

  updateCart: (Cart) => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        console.log("Cart", Cart.id);
        const currentUser = auth.currentUser;
        var a = [];
        const docRe = db
          .collection("user")
          .doc(currentUser.uid)
          .collection("cart")
          .doc(Cart.id)
          .update(Cart)
          .then((doctt) => {
            const document = db
              .collection("user")
              .doc(currentUser.uid)
              .collection("cart")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const data1 = doc.data();
                  data1.id = doc.id;
                  a.push(data1);
                });

                resolve(a);
              });
          });
      }, 500);
    });
  },

  deleteCart: (Cart) => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("user")
          .doc(currentUser.uid)
          .collection("cart")
          .doc(Cart)
          .delete()
          .then((doc) => {
            const document = db
              .collection("user")
              .doc(currentUser.uid)
              .collection("cart")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const data1 = doc.data();
                  data1.id = doc.id;
                  a.push(data1);
                });

                resolve(a);
              });
          });
      }, 500);
    });
  },
};
export default cartApi;
