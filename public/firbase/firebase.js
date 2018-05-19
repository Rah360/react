import  * as firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAVb7lbUesMjVECzQLf09HEVwFvejA_UHw",
    authDomain: "first-project-dcd93.firebaseapp.com",
    databaseURL: "https://first-project-dcd93.firebaseio.com",
    projectId: "first-project-dcd93",
    storageBucket: "first-project-dcd93.appspot.com",
    messagingSenderId: "218426358942"
};

firebase.initializeApp(config)


const database=firebase.database()
export default database

// database.ref("notes").on("child_changed",(snap)=>{
//     console.log(snap.key,snap.val())
// })

// database.ref("notes/-LCiEz8r4AbX_5AAN1oF").remove()

// database.ref("notes").once("value").then((snap)=>{
//     let exp=[]
//     snap.forEach(parent => {
//         exp.push({
//             id:parent.key,
//             ...parent.val()
//         })
//     });
//     console.log(exp);
// }).catch((e)=>{console.log(e);
// })

// database.ref("notes").push({
//     lang:"php",
//     work:"server side"
// })
// database.ref("notes").push({
//     lang:"react",
//     work:"front end"
// })
// database.ref("notes").push({
//     lang: "node.js",
//     work: "server side"
// })
// database.ref("notes").push({
//     lang: "html",
//     work: "front end"
// })
// database.ref().set({
//     name:"rahul",
//     age:"22",
//     location:{
//         city:"mumbai",
//         country:"india"
//     }
// }).then(()=>{
//     console.log("zhala")
// }).catch(()=>{
//     console.log("nay");
    
// })
// database.ref("pet").set(
//     "cat"
// )

// database.ref("location/country").set("INDIA")

// database.ref("age").remove().then(()=>{console.log("removed ")}).catch(()=>{console.log("failed");
// })
// database.ref().update({
//     name:"rahul sawant",
//     stressLevel:6,
//     'job/componay':"amazong",
//     'job/location/city':'seattle',
//    'location/city':"Mumbai"
// }).then(() => {
//     console.log("zhala")
// }).catch(() => {
//     console.log("nay");
// })
