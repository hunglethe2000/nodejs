import contactApi from "../api/contactApi.js";
import { $, reRender } from "../pages/util.js";

const Listcontact = {
  async render() {
    const { data: contacts } = await contactApi.getAll();
    // console.log(products);
    return `
        <table class="table table-data2">
        <thead>
            <tr>
                <th>
                    <label class="au-checkbox">
                        <input type="checkbox">
                        <span class="au-checkmark"></span>
                    </label>
                </th>
                <th>stt</th>
                <th>name</th>
                <th>gmail</th>
                <th>phone</th>
                <th>message</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="product-content">
            ${contacts
              .map((contact, index) => {
                return `
                <tr class="spacer"></tr>
                <tr class="tr-shadow">
                    <td>
                        <label class="au-checkbox">
                            <input type="checkbox">
                            <span class="au-checkmark"></span>
                        </label>
                    </td>
                    <td>${index}</td>
                    <td>${contact.name}</td>
                    <td>${contact.gmail}</td>
                    <td>${contact.phone}</td>
                    <td>${contact.message}</td>
                    <td>
                        <div class="table-data-feature">
                            <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                <i class="zmdi zmdi-edit"><a href="/#/feedback"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg></a></i>
                            </button>
                            <button data-id="${contact.id}" class="item btn-primary btn-remove" data-toggle="tooltip" data-placement="top" title="Delete">
                                <i class="zmdi zmdi-delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg></i>
                            </button>
                        </div>
                    </td>
                </tr>
                `;
              })
              .join("")}
        </tbody>
    </table>
        `;
  },
  async afterRender() {
    const btns = $(".btn-remove");
    // console.log(btns);
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", async function () {
        const question = confirm("bạn có chắc chắn muốn xóa?");
        if (question) {
          await contactApi.remove(id);
          await reRender(Listcontact, "#listcontact");
        }
      });
    });
  },
};
export default Listcontact;