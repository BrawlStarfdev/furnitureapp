<template>
  <div>
    <div v-if="!loginMode">
      <simple-modal v-model="openModal" onClose="closeModal">
        <template slot="body">
          <h2 style="color: green; text-align: center" v-if="successModal">
            Success!
          </h2>
          <h2 style="color: red; text-align: center" v-if="!successModal">
            Failed!
          </h2>
          <p v-if="successModal" style="text-align: center">
            You have registered successfully
          </p>
          <p v-if="!successModal && !serverError" style="text-align: center">
            Please input correct email and password or try again !
          </p>
          <p v-if="serverError" style="text-align: center">
            Sorry , it may be server error !Please Try Later
          </p>
        </template>
      </simple-modal>
    </div>
    <div v-if="loginMode">
      <simple-modal v-model="openModal" onClose="closeModal">
        <template slot="body">
          <h2 style="color: green; text-align: center" v-if="successModal">
            Success!
          </h2>
          <h2 style="color: red; text-align: center" v-if="!successModal">
            Failed!
          </h2>
          <p v-if="successModal" style="text-align: center">
            Congratulate, Login Successfully!
          </p>
          <p v-if="!successModal && !serverError" style="text-align: center">
            Please input correct email and password or try again !
          </p>
          <p v-if="serverError" style="text-align: center">
            Sorry , it may be server error !Please Try Later
          </p>
        </template>
      </simple-modal>
    </div>
  </div>
</template>

<script>
import SimpleModal from "simple-modal-vue";
export default {
  name: "SimpleModalExample",
  components: { SimpleModal },
  props: [
    "successModal",
    "serverError",
    "openModal",
    "closeModal",
    "loginMode",
  ],
};
</script>
