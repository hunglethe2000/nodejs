import bot from "../components/bot.js";
import top from "../components/top.js";
const A = {
  async render() {
    return `
          ${await top.render()}
            <form style="text-align: center;">
            <h1>Profile</h1>
            <img src="https://picsum.photos/640/480">
            <p>Đây là đài tiếng nói việt nam<br>
              Phát thanh từ hà nội<br>
              Thủ đô nước cộng hòa xã hội chủ nghĩa việt nam<br>
            </p>
            </form>
          ${await bot.render()}
        `;
  },
};
export default A;
