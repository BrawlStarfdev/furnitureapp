<template>
  <section class="container">
    <div class="row d-flex container">
      <div
        class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-sm-0 order-12"
        style="margin-right: -120px"
      >
        <img src="@/assets/contact.png" class="img-fluid" />
      </div>
      <div class="col-9">
        <h2>Welcome to Contact US</h2>
        <h5 style="color: grey">got a thought to discuss?</h5>
        <form action="">
          <div class="form-group">
            <label for="name" class="label">Name</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="E-mail" class="label">E-mail</label>
            <input type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="Message" class="label">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-control"
              style="overflow: hidden; height: 130px"
            ></textarea>
          </div>
          <button class="btn btn-light" href="#" role="button">submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>
<style scoped>
form {
  width: 100%;
  padding: 50px 0;
  display: block;
  margin: 0 auto;
}
.form-group {
  width: 100%;
  position: relative;
  margin: 0 0 50px;
}

.form-group label {
  font-weight: 50;
  font-size: 1rem;
  color: green;
  position: relative;
  transition: 0.5s ease-in-out;
  top: 0px;
  z-index: 0;
}
.form-group input,
.form-group textarea {
  outline: none;
  box-shadow: none;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #555;
  font-size: 1.2rem;
  font-weight: 100;
  width: 100%;
  height: 40px;
  transition: all 0.5s;
  z-index: 1;
  position: relative;
  border-radius: 1;
  resize: none;
  scroll-behavior: none;
}

.form-group input :valid ~ label,
.form-group input :focus ~ label,
.form-group textarea :valid ~ label,
.form-group textarea :focus ~ label {
  color: #71acd6;
  font-size: 1rem;
  top: -15px;
  transition: all 0.5s;
}
.form-group input :valid,
.form-group input :focus,
.form-group textarea :valid,
.form-group textarea :focus {
  border-color: chartreuse;
}
.img-fluid {
  width: 70%;
  height: 70%;
}
.container {
  display: flex;
  justify-content: space-between;
  align-self: center;
}
</style>
