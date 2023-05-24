import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        nulla soluta architecto id corporis quas fugit debitis nemo, neque
        inventore quidem, est ullam molestias recusandae quo eaque itaque sit
        distinctio!
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
