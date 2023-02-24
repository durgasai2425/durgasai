import { LightningElement ,wire} from 'lwc';
import getProducts from '@salesforce/apex/ProductSearch1.getProducts';

export default class Search2 extends LightningElement{
products;
error;
searchkey='';
recordshandler(event){
    this.searchkey=event.target.value
}
@wire (getProducts,{searchkey:'$searchkey'})
wiredproducts;



}