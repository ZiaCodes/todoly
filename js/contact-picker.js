const props = ['name','email','tel','address','icon'];
const opts = {multiple: true};
const supported = ('contacts' in navigator && 'ContactsManager' in window);

async function getContact(){
    if(supported){
        const contacts = await navigator.contacts.select(props,opts);
        console.log(contacts);
    }else{
        console.log("Not supported");
    }
}

const bttn = document.getElementById('contacts');

bttn.addEventListener('click',getContact);