import React, { useEffect, useState } from "react";
import { storage, db } from "./firebase";

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
            console.log(url, "imageUrl");
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
  console.log(image, "iamge");

  return (
    <div
      style={{
        height: "40px",
        border: "1px solid black",
      }}
    >
      <input type='file' onChange={handleChange} />
      <input
        type='text'
        placeholder='Enter caption'
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <button onClick={() => uploadHandle()}>Upload</button>
    </div>
  );
}

export default ImageUploader;
