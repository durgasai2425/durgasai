import { LightningElement,api,wire } from 'lwc';

import getContactList from '@salesforce/apex/ContactListctr1.getContactList';
export default class ContactlistCmp extends LightningElement {
    @api contacts;
    error;
    @wire(getContactList)
    wiredContacts({ error, data }) {
        if (data) {
            console.log('data in function :'+JSON.stringify(data));
            this.contacts = data;
            this.error = undefined;
            
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
    method(){
        console.log(conlist);
    }
   

}