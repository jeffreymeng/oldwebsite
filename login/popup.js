  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBjd9WSwZZR7zU3XHQodOQbSNoEar3aSqA",
      authDomain: "jeffreyauth.firebaseapp.com",
      databaseURL: "https://jeffreyauth.firebaseio.com",
      storageBucket: "project-4619681356128759186.appspot.com",
  };
  firebase.initializeApp(config);
  $("#passwordlogin").click(function(){
    firebase.auth().signInWithEmailAndPassword($("#username").val(), $("#password").val()).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  })
  $("#googlelogin").click(function(){
      
          
          var provider = new firebase.auth.GoogleAuthProvider();
         provider.addScope('email profile');
         firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user)
          console.log(token)
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(error)
          // ...
        });
  })
  $("#githublogin").click(function(){
      
          
          var provider = new firebase.auth.GithubAuthProvider();
        
         firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user)
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(error)
          // ...
        });
  })
  function close(message) {
    
    try {
        window.opener.japi.HandlePopupResult(message));
    }
    catch (err) {}
    window.close();
    return false;

  }