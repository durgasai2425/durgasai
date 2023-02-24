import { LightningElement,api } from 'lwc';

export default class Lwc extends LightningElement {
    @api product={}

    handleClick(){
        this.dispatchEvent(new CustomEvent('selected', {
            detail:this.product.Id
        }))
    }
}







