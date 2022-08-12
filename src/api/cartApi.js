import { auth, db } from "../firebase-config";
const cartApi = {
  getCart: () => {
    return new Promise((resolve, reject) => {
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
              data1.idD = doc.id;
              a.push(data1);
            });

            resolve(a);
          });
      }, 500);
    });
  },
  addCart: (newCart) => {
    return new Promise((resolve, reject) => {
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
                  data1.idD = doc.id;
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRe = db
          .collection("user")
          .doc(currentUser.uid)
          .collection("cart")
          .doc(Cart.idD)
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
                  a.push(data1);
                });

                resolve(a);
              });
          });
      }, 500);
    });
  },

  deleteCart: (Cart) => {
    return new Promise((resolve, reject) => {
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
