public with sharing class ProductSearch1 {
    @AuraEnabled(Cacheable = true)
    public static List<Product2>getProducts(string searchkey){
        string key ='%' + searchkey+'%';
        List<Product2>productlist =[select id,ProductCode,price__c,Product_Availability__c,Image__c,Image_link__c from Product2 where CreatedDate >2023-01-01T00:00:00Z AND Name like :key];
        return productlist;Name,
    }

       
    
} 