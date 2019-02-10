export default {
  changeCity1 (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {

    }
  }
}
