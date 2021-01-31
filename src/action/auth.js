import auth from "react-native-firebase/auth"
import Snackbar from "react-native-snackbar"
import database from "@react-native-firebase/database"



export const signUp = (data) => async () => {
    console.log(data);
    const {name, instaUserName, bio, email, password, country, image} = data

    auth.createUserWithEmailAndPassword(email, password)
    .then((data)=>{
        console.log(data)
        console.log("User Created successfully")
    })
    .catch((error)=>{
        console.error((error)=>{
            console.error(error)
            Snackbar.show({
                text: "Signup failed..",
                textColor: "white",
                backgroundColor: "red"
            })
        })
    })
}