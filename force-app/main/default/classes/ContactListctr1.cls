public with sharing class ContactListctr1 {
    @AuraEnabled(cacheable = true)
    public static List<Contact>getContactList(){
     List<Contact> conList = [select id, Name, MobilePhone from Contact limit 10];
     return conList;
    }

}