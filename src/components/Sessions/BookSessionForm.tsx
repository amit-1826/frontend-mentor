type BookSessionFormProps = {
  sessionTitle: string; // You can pass the session title or any other relevant details as props to the form if needed
  onSubmit?: (formData: { name: string; email: string; date: string }) => void; // Optional submit handler
};

export default function BookSessionForm({
  sessionTitle,
  onSubmit,
}: BookSessionFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      name: (event.currentTarget.elements.namedItem("name") as HTMLInputElement)
        .value,
      email: (
        event.currentTarget.elements.namedItem("email") as HTMLInputElement
      ).value,
      date: (event.currentTarget.elements.namedItem("date") as HTMLInputElement)
        .value,
    };
    if (onSubmit) {
      onSubmit(formData);
    }
  }
  return (
    <form className="book-session-form" onSubmit={handleSubmit}>
      <h3>{sessionTitle}</h3>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="date">Preferred Date</label>
        <input type="date" id="date" name="date" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Book Session
      </button>
    </form>
  );
}
