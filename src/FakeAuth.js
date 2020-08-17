

// function fakeAuth() {
//   this.isAuthenticated = false;

//   const authenticate = (cb) => {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   }
//   const signout = (cb) => {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }

//   return {
//     authenticate: authenticate,
//     signout: signout
//   }
// }

// export default new fakeAuth();