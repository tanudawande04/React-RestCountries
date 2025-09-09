export const Contact = () => {

    const handleFormSubmit = (formData) => {

        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);


    }
    return (
        <section className="sectuon-contact">
            <h2 className="container-title">Contact Us </h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text" className="form-control" placeholder="enter your name" name="username" required autoComplete="false" />

                    <input type="email" className="form-control" placeholder="enter your email" name="email" required autoComplete="false" />

                    <textarea className="form-control" rows="10" name="message" placeholder="enter your message" required autoComplete="false"></textarea>

                    <button type="submit" value="send">Send</button>
                </form>

            </div>

        </section>
    )
}