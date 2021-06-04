import Input from "../Input/Input";
import classes from "../Styles/MainStyle.module.css";
import classesKomentarzPage from "./Komentarze.module.css";
import Komentarz from "./Komentarz/Komentarz";
import { useEffect, useRef, useState } from "react";

const Komentarze = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [comments, setComments] = useState(null);

  console.log(isLoad, "COMPONENT");

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const commentInputRef = useRef();

  const loadComments = () => {
    fetch(
      "https://guitar-lessons-poznan-default-rtdb.firebaseio.com/comments.json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const comments = Object.keys(data).map((key) => {
            const comment = data[key];
            return (
              <Komentarz
                key={key}
                name={comment.name}
                comment={comment.comment}
              />
            );
          });

          setComments(comments);
          console.log("loadComments Function");
        }
      });
  };

  useEffect(() => {
    loadComments();
    console.log("USE EFFECT");
    isLoad && setIsLoad(false);
  }, [isLoad]);

  async function submitHandler(event) {
    event.preventDefault();

    if (
      nameInputRef.current.value &&
      emailInputRef.current.value &&
      commentInputRef.current.value
    ) {
      const comment = {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        comment: commentInputRef.current.value,
      };
      await fetch(
        "https://guitar-lessons-poznan-default-rtdb.firebaseio.com/comments.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setIsLoad(true);
          console.log(isLoad, "SUBMIT HANDLER");
          nameInputRef.current.value = "";
          emailInputRef.current.value = "";
          commentInputRef.current.value = "";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <div className={classes.Main}>
      <h1>Komentarze</h1>
      {comments}
      <h2>Zostaw Swój Komentarz</h2>
      <form className={classesKomentarzPage.Form} onSubmit={submitHandler}>
        <Input
          ref={nameInputRef}
          type="text"
          id="name"
          label="Enter Your Name"
          placeholder="fullname"
        />
        <Input
          ref={emailInputRef}
          type="email"
          id="email"
          label="E-mail"
          placeholder="e-mail"
        />
        <Input
          ref={commentInputRef}
          type="textarea"
          id="comment"
          label="Write Comment"
          placeholder="write comment"
        />
        <button type="submit" className={classesKomentarzPage.Button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Komentarze;
