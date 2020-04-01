import React from "react";
import { useForm } from "react-hook-form";

// import "./styles.css";

const LessonResourceForm: React.FC = () => {
  const [indexes, setIndexes] = React.useState<any>([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const addFriend = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeFriend = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFriends = () => {
    setIndexes([]);
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <>
      <h1>hello</h1>
      {indexes.map(index => {
        const fieldName = `friends[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              First Name {index}:
              <input
                type="text"
                name={`${fieldName}.firstName`}
                ref={register}
              />
            </label>

            <label>
              Last Name {index}:
              <input
                type="text"
                name={`${fieldName}.lastName`}
                ref={register}
              />
            </label>
            <button type="button" onClick={removeFriend(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type="button" onClick={addFriend}>
        Add Friend
      </button>
      <button type="button" onClick={clearFriends}>
        Clear Friends
      </button>
      <button type="button" onClick={onSubmit}>
        submit reousrces
      </button>
    {/* // </form> */}
    </>
  );
}

export default LessonResourceForm;