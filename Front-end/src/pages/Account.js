import React from "react";
import "../accountStyles.css";

export default function Account() {
  return (
    <section className="forms">
      <div class="account">
        <div class="create">
          <h1>Create Account</h1>

          <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" /> <br />
            <label for="sname">Last Name</label>
            <input type="text" id="sname" name="sname" /> <br />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" /> <br />
            <label for="datemin">Date of Birth</label>
            <input type="date" id="birthday" min="1960-01-02" /> <br />
            <label for="pword">Password</label>
            <input type="password" id="pword" name="pword" /> <br />
            <label for="cpword">Confirm Password</label>
            <input type="password" id="cpword" name="cpword" /> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div class="login">
          <h1>Login</h1>
          <form>
            <label for="lemail">Email</label>
            <input type="email" id="lemail" name="lemail" /> <br />
            <label for="lpword">Password</label>
            <input type="password" id="lpword" name="lpword" /> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
