import { LightningElement,api } from 'lwc';

export default class TileComponent extends LightningElement {
    @api product={}

    handleClick(){
        this.dispatchEvent(new CustomEvent('selected', {
            detail:this.product.Id
        }))
    }
}  