import React from "react";


export default function NewEvent({handleSubmit, selected}) {

  const [name, setName] = React.useState('')
  const [location, setLocation] = React.useState('')
  return (<div>
    Enter your event details:
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          name,
          location,
          selected,
        })
      }}
    >
      <label>
        Name:
        <input
          title={'name'}
          type={'text'}
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          title={'location'}
          type={'text'}
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
      </label>
      <input
        type={'submit'}
      />
    </form>
  </div>)

}