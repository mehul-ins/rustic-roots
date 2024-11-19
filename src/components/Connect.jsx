import 'boxicons'

const Connect = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted! Thank you for reaching out.");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Connect with Us</h1>

      {/* Social Media Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          
          <i className='bx bxl-whatsapp'></i>
          </a>
          <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-twitter' ></i>
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-instagram ' ></i>
          </a>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Send Us Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-2 border rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Submit Feedback
          </button>
        </form>
      </section>
    </div>
  );
};

export default Connect;
