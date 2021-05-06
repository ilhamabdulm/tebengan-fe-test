import "./App.css";

import ProfilePicture from "assets/profile-pic.png";

function App() {
  return (
    <section className="page-container">
      <section className="page-content">
        <section className="top-content">
          <div className="greeting">
            <h1>HI !</h1>
            <h2>Your Account is Verified</h2>
          </div>
          <div className="image-container">
            <img src={ProfilePicture} alt="profile-pic" />
          </div>
        </section>

        <section className="bottom-content">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32
          </p>
        </section>
      </section>
    </section>
  );
}

export default App;
