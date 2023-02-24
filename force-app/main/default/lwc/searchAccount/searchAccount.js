import { LightningElement ,wire,api,track} from 'lwc';
import getAccounts from '@salesforce/apex/ProductSearchClass.getAccounts';
export default class SearchAccount extends LightningElement {
   //accountName='';
   @track lstAccounts;
   //@api accountList; 
   @wire(getAccounts) lstAccounts;
   //retrieveAccpunts;
 /*handlekeychange(event){
   this.accountName =event.target.value;
    }*/
}