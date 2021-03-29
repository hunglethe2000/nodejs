const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class Product{
    ListProduct(product){
        const result = product.map(({id, name , image , price , status, quantity}, index) =>{
            return`
                <tr class="spacer"></tr>
                <tr class="tr-shadow">
                    <td>
                        <label class="au-checkbox">
                            <input type="checkbox">
                            <span class="au-checkmark"></span>
                        </label>
                    </td>
                    <td>${index}</td>
                    <td>${name}</td>
                    <td class="desc"><img src="${image}" width="100" height="80"></td>
                    <td>${price}</td>
                    <td>${status ? 'còn hàng':'hết hàng' }</td>
                    <td>${quantity}</td>
                    <td>
                        <div class="table-data-feature">
                            <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                <i class="zmdi zmdi-edit"></i>
                            </button>
                            <button data-id="${id}" class="item btn-primary btn-remove" data-toggle="tooltip" data-placement="top" title="Delete">
                                <i class="zmdi zmdi-delete"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `
        }).join("");
        $('#product-content').innerHTML = result;
        $('#form-add').addEventListener('submit', (e)=>{
            e.preventDefault();
            const product ={
                id: document.$('#product-id').value,
                name: $('#product-name').value,
                img: $('#product-image').value,
                price: $('#product-price').value,
                status: $('#product-status').value,
                quantity: $('#product-quantity').value
            }
            axios.post('http://localhost:3000/products', product)
            .then(()=>{
                console.log('ban da them thanh cong');
            })
        })

    };
    
    removeProduct(id){
        // $(document).ready(function(){
        //     $('#btn-remove').click(function(){
        //       $(id).remove();
        //     });
        //   });
        console.log("alo alo alo ", id);
    }
    detailProduct(id){
        // console.log("here detail", id);
        const dt = data.find(obj => obj.id == id);
        $('#btn-detail').innerHTML = `
        <h4>Name: ${dt.name}</h4>
        <img src="${dt.image}" height ="300" width="300">
        <div>Status: <span>${dt.status ? 'con hang' : 'het hang'}</span></div>
        <div>Quantity: <span>${dt.quantity}</span></div>
        `
    }
    getButton(){
        const buttons = $$('.btn');
        let _this = this;
        buttons.forEach(button => {
            button.addEventListener('click', function(){
                const { id } = this.dataset;
                const hasClass = this.classList

                if(hasClass.contains('btn-detail')){
                    _this.detailProduct(id); 
                }else if(hasClass.contains('btn-remove')){
                    _this.removeProduct(id); 
                }
            });
        })
    }
}



//////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', ()=>{
    // console.log('loaded');
    const product = new Product();
    product.getButton();
    // product.removeProduct();
    fetch('http://localhost:3000/products')
    .then(Response => Response.json())
    .then(data=>{
        console.log(data);
        product.ListProduct(data)
    });

});