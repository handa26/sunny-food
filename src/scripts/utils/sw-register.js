import runtime from "serviceworker-webpack-plugin/lib/runtime";

const swRegister = async () => {
  if ("serviceWorker" in navigator) {
    await runtime.register();
    return;
  }
  console.log("serviceWorker does not support with this browser!");
}

export default swRegister;
