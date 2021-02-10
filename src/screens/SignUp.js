import  React, {useState} from "react";

import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import {
    Text,
    Container,
    Form,
    Item,
    Input,
    Button,
    Thumbnail,
    Content
} from "native-base"

import storage from "@react-native-firebase/storage"
import ProgressBar from "react-native-progress/Bar";
import ImagePicker from "react-native-image-picker";
import {options} from "../utils/options"

import PropTypes from "prop-types";
import { signUp } from "../action/auth";
import { connect } from "react-redux";

const signUp = ({signUp}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [instaUsername, setInstaUsername] = useState("")
    const [country, setCountry] = useState("")
    const [bio, setBio] = useState("")
    const [image, setImage] = useState(
        "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"
    )
    const [imageUploading, setImageUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(null)

    return(
        <>
        <Text>Hello from SignUP</Text>
        </>
    )
}

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}

signUp.PropTypes = {
    signUp: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(signUp)