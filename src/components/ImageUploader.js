import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { storage, db } from "./firebase";

const ModelContainer = styled.div`
  height: 40px;
  border: 1px solid black;
  padding: 15px 15px 5px 15px;
  background: white;
`;

const InputFile = styled.input``;
const InputField = styled.input`
  padding: 4px;
`;
const Button = styled.button``;

function ImageUploader() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState();
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("userName", JSON.stringify()));
  });

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadHandle = () => {
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageurl: url,
              username: user,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <ModelContainer>
      <InputFile type='file' onChange={handleChange} />
      <InputField
        type='text'
        placeholder='Enter caption'
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <Button onClick={() => uploadHandle()}>Upload</Button>
    </ModelContainer>
  );
}

export default ImageUploader;
