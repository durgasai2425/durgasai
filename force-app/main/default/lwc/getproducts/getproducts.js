import { LightningElement,wire } from 'lwc';
import getproducts from '@salesforce/apex.ProductsClass.getproducts';
export default class Getproducts extends LightningElement {

products
error
searchkey=''
fetchProductsHandler(event){

 this.searchkey=event.target.value
}

    @wire(getproducts,{searchkey:'$searchkey'})
    wiredProducts
    ({data, error}){
        if(data){
            console.log(data);
            this.products = data
        }
        if(error){
            this.error = error
            console.error(error);
        }
    }
    handleProductSelected(event){
        console.log("selected product Id", event.detail);
    }

}