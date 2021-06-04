import Input from "../../Input/Input";

const NewKomentarzForm = () => {
  return (
    <form className={classesKomentarzPage.Form} onSubmit={submitHandler}>
      <Input
        type="text"
        id="name"
        label="Enter Your Name"
        placeholder="fullname"
      />
      <Input type="email" id="email" label="E-mail" placeholder="e-mail" />
      <Input
        type="textarea"
        id="comment"
        label="Write Comment"
        placeholder="write comment"
      />
      <button type="submit" className={classesKomentarzPage.Button}>
        Submit
      </button>
    </form>
  );
};

export default NewKomentarzForm;
